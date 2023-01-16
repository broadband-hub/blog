import { Component, Input } from '@angular/core';
import { BlogPost } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.scss']
})
export class BlogPostCardComponent {

  @Input() post!: BlogPost;

}
