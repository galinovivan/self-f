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
import { ProjectSingleComponent } from './components/portfolio/project-single/project-single.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { CurseLinkComponent } from './components/curse-link/curse-link.component';
import { IcebergComponent } from './components/iceberg/iceberg.component';
import { SeaComponent } from './components/sea/sea.component';
import { NavComponent } from './components/nav/nav.component';

import { HttpService } from './services/http.service/http.service';
import { HaoticMovindDirective } from './directives/haotic-moving.directive';
import { ContentLayoutComponent } from './components/layout/content-layout/content-layout.component';
import { FrontendSkilsComponent } from './components/frontend-skils/frontend-skils.component';
import { FrontendPortfolioComponent } from './components/portfolio/frontend-portfolio/frontend-portfolio.component';
import { PortfolioComponent } from './components/portfolio/base/portfolio/portfolio.component';
import { ContactComponent } from './components/contacts/contact.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'frontend-skils',
    component: FrontendSkilsComponent
  },
  {
    path: 'frontend-portfolio',
    component: FrontendPortfolioComponent
  },
  {
    path: 'project/:name',
    component: ProjectSingleComponent
  },
  {
    path: 'contact',
    component: ContactComponent
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
    NavComponent,
    ContentLayoutComponent,
    FrontendSkilsComponent,
    FrontendPortfolioComponent,
    PortfolioComponent,
    ContactComponent,
    SocialLinksComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
