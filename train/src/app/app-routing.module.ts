import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {OxfordWordComponent} from './components/oxford-word/oxford-word.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
  {
    path: 'words',
    component: OxfordWordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
