import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'characters',
    component:CharactersComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'info/:id',
    component:InfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
