import { Component, OnInit } from '@angular/core';
import { BlogPostWithAuthor, BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blog_posts?: BlogPostWithAuthor[];

  constructor(private blogService: BlogService) { }

  async ngOnInit() {
    this.blog_posts = await this.blogService.getPosts();
  }

}
