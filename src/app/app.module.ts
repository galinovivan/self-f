import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BirdComponent } from './components/bird/bird.component';
import { FishComponent } from './components/fish/fish.component';
import { SkilsComponent } from './components/skils/skils.component';
import { ProjectSingleComponent } from './components/project-single/project-single.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { CurseLinkComponent } from './components/curse-link/curse-link.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: 'project/:id',
    component: ProjectSingleComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    HomeComponent,
    BirdComponent,
    FishComponent,
    SidebarComponent,
    SkilsComponent,
    ProjectSingleComponent,
    CloudComponent,
    CurseLinkComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
