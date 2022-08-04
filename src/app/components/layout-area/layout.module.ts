import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeModule } from '../home-area/home.module';
import { AboutModule } from '../about-area/about.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsModule } from '../products-area/products.module';
import { AuthModule } from '../auth-area/auth.module';

//ng g m components/layout-area/layout --flat

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    AboutModule,
    AppRoutingModule,
    ProductsModule,
    AuthModule

  ]
})
export class LayoutModule { }
