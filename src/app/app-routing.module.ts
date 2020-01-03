import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentComponent} from './components/content/content.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutComponent} from './components/about/about.component';


const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
