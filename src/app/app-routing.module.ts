import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ChangelogComponent } from './pages/changelog/changelog.component';
import { GuidesComponent } from './pages/guides/guides.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'changelog', component: ChangelogComponent },
  { path: 'guides', component: GuidesComponent },
  { path: ':public_id', component: BlogPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
