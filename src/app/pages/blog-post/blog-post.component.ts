import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostWithAuthor, BlogService } from 'src/app/services/blog.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  private public_id!: string;
  loading = true;
  post?: BlogPostWithAuthor | null;
  error = false;

  constructor(
    private seoService: SeoService,
    public blogService: BlogService,
    private activatedRoute: ActivatedRoute) { }

  private loadPost() {
    delete this.post;
    this.loading = true;
    this.error = false;
    this.blogService.getPost(this.public_id)
      .then(post => {
        this.post = post;
        if (post) {
          this.seoService.updateMetadata({
            title: post.title,
            description: post.description,
            image: `https://vbwgwexedzhcxpxxnhey.supabase.co/storage/v1/object/public/blog-post-thumbnails/${post.public_id}.png`
          });
        }
      })
      .catch(() => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      })
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const post_id = params['public_id'];
      if (post_id !== this.public_id) {
        this.public_id = params['public_id'];
        this.loadPost();
      }
    })
  }

}
