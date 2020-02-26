import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {OxfordWordComponent} from './components/oxford-word/oxford-word.component';
import {VariantsComponent} from './components/variants/variants.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
  path: 'home',
  component: HomeComponent
},
  {
    path: 'words',
    component: OxfordWordComponent
  },
  {
    path: 'variants/:variantValue',
    component: VariantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
