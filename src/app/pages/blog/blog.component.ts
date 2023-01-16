import { Component } from '@angular/core';
import { BlogPost } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  blog_posts: BlogPost[] = [
    {
      id: 'abc123',
      title: 'Android Developer Summit',
      description: 'Design, code, and tools: everything new in Material at this year\'s ADS',
      content: 'First off, our site has been updated for Material Design 3, officially moving from the m3.material.io subdomain to the main attraction! If you\'ve taken a look around recently, you may have noticed that the official documentation for Material Design now makes more use of Material 3\'s principles. Dynamic color brings together the site\'s imagery and content, while the site itself demonstrates how the system can flex for product-specific use cases. Design Lead David Allin Reese points out the way new motion design contributes to the site\'s design refresh, allowing Material.io to “express an energetic spirit through its motion, from changes in pixels to entire views.” Learn more about the full breakdown of the design.',
      image: 'https://assets-global.website-files.com/5f2a93fe880654a977c51043/63b587b4b1f3a80f91f0dbed_image11.png',
      published_at: new Date(),
      author_name: 'Kyle Rummens',
      author_title: 'Senior Software Engineer',
      author_image: '',
      seo_image: ''
    },
    {
      id: 'abc123',
      title: 'Android Developer Summit',
      description: 'Design, code, and tools: everything new in Material at this year\'s ADS',
      content: 'First off, our site has been updated for Material Design 3, officially moving from the m3.material.io subdomain to the main attraction! If you\'ve taken a look around recently, you may have noticed that the official documentation for Material Design now makes more use of Material 3\'s principles. Dynamic color brings together the site\'s imagery and content, while the site itself demonstrates how the system can flex for product-specific use cases. Design Lead David Allin Reese points out the way new motion design contributes to the site\'s design refresh, allowing Material.io to “express an energetic spirit through its motion, from changes in pixels to entire views.” Learn more about the full breakdown of the design.',
      image: 'https://assets-global.website-files.com/5f2a93fe880654a977c51043/63b587b4b1f3a80f91f0dbed_image11.png',
      published_at: new Date(),
      author_name: 'Kyle Rummens',
      author_title: 'Senior Software Engineer',
      author_image: '',
      seo_image: ''
    },
    {
      id: 'abc123',
      title: 'Android Developer Summit',
      description: 'Design, code, and tools: everything new in Material at this year\'s ADS',
      content: 'First off, our site has been updated for Material Design 3, officially moving from the m3.material.io subdomain to the main attraction! If you\'ve taken a look around recently, you may have noticed that the official documentation for Material Design now makes more use of Material 3\'s principles. Dynamic color brings together the site\'s imagery and content, while the site itself demonstrates how the system can flex for product-specific use cases. Design Lead David Allin Reese points out the way new motion design contributes to the site\'s design refresh, allowing Material.io to “express an energetic spirit through its motion, from changes in pixels to entire views.” Learn more about the full breakdown of the design.',
      image: 'https://assets-global.website-files.com/5f2a93fe880654a977c51043/63b587b4b1f3a80f91f0dbed_image11.png',
      published_at: new Date(),
      author_name: 'Kyle Rummens',
      author_title: 'Senior Software Engineer',
      author_image: '',
      seo_image: ''
    },
    {
      id: 'abc123',
      title: 'Android Developer Summit',
      description: 'Design, code, and tools: everything new in Material at this year\'s ADS',
      content: 'First off, our site has been updated for Material Design 3, officially moving from the m3.material.io subdomain to the main attraction! If you\'ve taken a look around recently, you may have noticed that the official documentation for Material Design now makes more use of Material 3\'s principles. Dynamic color brings together the site\'s imagery and content, while the site itself demonstrates how the system can flex for product-specific use cases. Design Lead David Allin Reese points out the way new motion design contributes to the site\'s design refresh, allowing Material.io to “express an energetic spirit through its motion, from changes in pixels to entire views.” Learn more about the full breakdown of the design.',
      image: 'https://assets-global.website-files.com/5f2a93fe880654a977c51043/63b587b4b1f3a80f91f0dbed_image11.png',
      published_at: new Date(),
      author_name: 'Kyle Rummens',
      author_title: 'Senior Software Engineer',
      author_image: '',
      seo_image: ''
    },
    {
      id: 'abc123',
      title: 'Android Developer Summit',
      description: 'Design, code, and tools: everything new in Material at this year\'s ADS',
      content: 'First off, our site has been updated for Material Design 3, officially moving from the m3.material.io subdomain to the main attraction! If you\'ve taken a look around recently, you may have noticed that the official documentation for Material Design now makes more use of Material 3\'s principles. Dynamic color brings together the site\'s imagery and content, while the site itself demonstrates how the system can flex for product-specific use cases. Design Lead David Allin Reese points out the way new motion design contributes to the site\'s design refresh, allowing Material.io to “express an energetic spirit through its motion, from changes in pixels to entire views.” Learn more about the full breakdown of the design.',
      image: 'https://assets-global.website-files.com/5f2a93fe880654a977c51043/63b587b4b1f3a80f91f0dbed_image11.png',
      published_at: new Date(),
      author_name: 'Kyle Rummens',
      author_title: 'Senior Software Engineer',
      author_image: '',
      seo_image: ''
    },
    {
      id: 'abc123',
      title: 'Android Developer Summit',
      description: 'Design, code, and tools: everything new in Material at this year\'s ADS',
      content: 'First off, our site has been updated for Material Design 3, officially moving from the m3.material.io subdomain to the main attraction! If you\'ve taken a look around recently, you may have noticed that the official documentation for Material Design now makes more use of Material 3\'s principles. Dynamic color brings together the site\'s imagery and content, while the site itself demonstrates how the system can flex for product-specific use cases. Design Lead David Allin Reese points out the way new motion design contributes to the site\'s design refresh, allowing Material.io to “express an energetic spirit through its motion, from changes in pixels to entire views.” Learn more about the full breakdown of the design.',
      image: 'https://assets-global.website-files.com/5f2a93fe880654a977c51043/63b587b4b1f3a80f91f0dbed_image11.png',
      published_at: new Date(),
      author_name: 'Kyle Rummens',
      author_title: 'Senior Software Engineer',
      author_image: '',
      seo_image: ''
    },
    {
      id: 'abc123',
      title: 'Android Developer Summit',
      description: 'Design, code, and tools: everything new in Material at this year\'s ADS',
      content: 'First off, our site has been updated for Material Design 3, officially moving from the m3.material.io subdomain to the main attraction! If you\'ve taken a look around recently, you may have noticed that the official documentation for Material Design now makes more use of Material 3\'s principles. Dynamic color brings together the site\'s imagery and content, while the site itself demonstrates how the system can flex for product-specific use cases. Design Lead David Allin Reese points out the way new motion design contributes to the site\'s design refresh, allowing Material.io to “express an energetic spirit through its motion, from changes in pixels to entire views.” Learn more about the full breakdown of the design.',
      image: 'https://assets-global.website-files.com/5f2a93fe880654a977c51043/63b587b4b1f3a80f91f0dbed_image11.png',
      published_at: new Date(),
      author_name: 'Kyle Rummens',
      author_title: 'Senior Software Engineer',
      author_image: '',
      seo_image: ''
    },
    {
      id: 'abc123',
      title: 'Android Developer Summit',
      description: 'Design, code, and tools: everything new in Material at this year\'s ADS',
      content: 'First off, our site has been updated for Material Design 3, officially moving from the m3.material.io subdomain to the main attraction! If you\'ve taken a look around recently, you may have noticed that the official documentation for Material Design now makes more use of Material 3\'s principles. Dynamic color brings together the site\'s imagery and content, while the site itself demonstrates how the system can flex for product-specific use cases. Design Lead David Allin Reese points out the way new motion design contributes to the site\'s design refresh, allowing Material.io to “express an energetic spirit through its motion, from changes in pixels to entire views.” Learn more about the full breakdown of the design.',
      image: 'https://assets-global.website-files.com/5f2a93fe880654a977c51043/63b587b4b1f3a80f91f0dbed_image11.png',
      published_at: new Date(),
      author_name: 'Kyle Rummens',
      author_title: 'Senior Software Engineer',
      author_image: '',
      seo_image: ''
    },
    {
      id: 'abc123',
      title: 'Android Developer Summit',
      description: 'Design, code, and tools: everything new in Material at this year\'s ADS',
      content: 'First off, our site has been updated for Material Design 3, officially moving from the m3.material.io subdomain to the main attraction! If you\'ve taken a look around recently, you may have noticed that the official documentation for Material Design now makes more use of Material 3\'s principles. Dynamic color brings together the site\'s imagery and content, while the site itself demonstrates how the system can flex for product-specific use cases. Design Lead David Allin Reese points out the way new motion design contributes to the site\'s design refresh, allowing Material.io to “express an energetic spirit through its motion, from changes in pixels to entire views.” Learn more about the full breakdown of the design.',
      image: 'https://assets-global.website-files.com/5f2a93fe880654a977c51043/63b587b4b1f3a80f91f0dbed_image11.png',
      published_at: new Date(),
      author_name: 'Kyle Rummens',
      author_title: 'Senior Software Engineer',
      author_image: '',
      seo_image: ''
    },
  ];

}
