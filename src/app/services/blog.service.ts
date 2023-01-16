import { Injectable } from '@angular/core';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  published_at: Date;
  author_name: string;
  author_title: string;
  author_image: string;
  seo_image: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }
}
