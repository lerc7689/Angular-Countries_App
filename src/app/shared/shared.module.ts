import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { SharedSearchBoxComponent } from './components/search-box/search-box.component';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SideBarComponent,
    ContactPageComponent,
    SharedSearchBoxComponent,
    LoaderSpinnerComponent,
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SideBarComponent,
    ContactPageComponent,
    SharedSearchBoxComponent,
    LoaderSpinnerComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
