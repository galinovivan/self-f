import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BirdComponent } from './components/bird/bird.component';
import { BirdsComponent } from './components/birds/birds.component';
import { FishComponent } from './components/fish/fish.component';
import { SkilsComponent } from './components/skils/skils.component';
import { ProjectSingleComponent } from './components/project-single/project-single.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { CurseLinkComponent } from './components/curse-link/curse-link.component';
import { IcebergComponent } from './components/iceberg/iceberg.component';
import { SeaComponent } from './components/sea/sea.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { NavComponent } from './components/nav/nav.component';

import { HaoticMovindDirective } from './directives/haotic-moving.directive';
import { ContentBlockComponent } from './components/content-block/content-block.component';
import { FrontendPorfolioComponent } from './components/frontend-porfolio/frontend-porfolio.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'frontend-portfolio',
    component: FrontendPorfolioComponent
  },
  {
    path: 'project/:id',
    component: ProjectSingleComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    HomeComponent,
    BirdComponent,
    BirdsComponent,
    FishComponent,
    SidebarComponent,
    SkilsComponent,
    ProjectSingleComponent,
    CloudComponent,
    CurseLinkComponent,
    IcebergComponent,
    SeaComponent,
    HaoticMovindDirective,
    PortfolioSectionComponent,
    NavComponent,
    ContentBlockComponent,
    FrontendPorfolioComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
