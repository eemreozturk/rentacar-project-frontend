import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeLayoutComponent } from '../../layouts/home-layout/home-layout.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BrandListMenuComponent } from '../../features/brands/components/brand-list-menu/brand-list-menu.component';
import { MenuComponent } from '../../shared/components/menu/menu.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,HomeLayoutComponent,ButtonComponent,BrandListMenuComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent { }
