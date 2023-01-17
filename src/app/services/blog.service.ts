import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import { Converter } from 'showdown';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { DOCUMENT, isPlatformServer } from '@angular/common';

export interface BlogPost {
  id: string;
  created_at: Date;
  public_id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  active: boolean;
  published: boolean;
  published_at?: Date;
  author_id: string;
  views: number;
  seo_image: string;
}

export interface Author {
  id: string;
  name: string;
  title: string;
  image: string;
}

export interface BlogPostWithAuthor extends BlogPost {
  author: Author;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly converter = new Converter();

  data!: string;
  baseURL!: string;
  isServer: Boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    @Optional() @Inject(REQUEST) private request: any,
    @Inject(DOCUMENT) private document: Document,
    private sanitizer: DomSanitizer,
    private httpClient: HttpClient) {
    this.isServer = isPlatformServer(platformId);

    // get base url
    if (this.isServer) {
      this.baseURL = this.request.headers.referer;
    } else {
      this.baseURL = this.document.location.origin + '/';
    }
  }

  getPosts(page: number = 0): Promise<BlogPostWithAuthor[]> {
    console.log('Fetching response');
    return firstValueFrom(this.httpClient.get<BlogPostWithAuthor[]>(this.baseURL + 'api/blog-posts'))
  }

  getPost(post_id: string): Promise<BlogPostWithAuthor> {
    return firstValueFrom(this.httpClient.get<BlogPostWithAuthor>('/api/blog-posts/' + post_id));
  }

  markdownToHtml(markdown: string) {
    return this.sanitizer.bypassSecurityTrustHtml(this.converter.makeHtml(markdown));
  }
}
