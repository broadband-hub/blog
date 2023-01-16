import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ChangelogComponent } from './pages/changelog/changelog.component';
import { GuidesComponent } from './pages/guides/guides.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { BlogPostCardComponent } from './pages/blog/blog-post-card/blog-post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BlogComponent,
    ChangelogComponent,
    GuidesComponent,
    BlogPostComponent,
    BlogPostCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
