import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostWithAuthor, BlogService } from 'src/app/services/blog.service';

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

  article_loaded = false;

  constructor(
    //private seoService: SeoService,
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
          /*this.seoService.updateMetadata({
            title: post.title,
            description: post.description,
            image: `https://vbwgwexedzhcxpxxnhey.supabase.co/storage/v1/object/public/blog-post-thumbnails/${post.idd}.png`
          });*/

          setTimeout(() => {
            this.article_loaded = true;
          }, 300)
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

    this.post = await this.blogService.getPost('my-first-post');
    this.loading = false;

    this.activatedRoute.params.subscribe(params => {
      const post_id = params['public_id'];
      if (post_id !== this.public_id) {
        this.public_id = params['public_id'];
        //this.loadPost();
      }
    })
  }

}
