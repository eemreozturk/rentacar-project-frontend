import { Component } from '@angular/core';
import { NavItem, NavTitle, NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,ButtonComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {
  navTitle : NavTitle ={text:'Rent A Car Company', routerLink:''}
navItems : NavItem[]=[
  { label : 'Home', link: '/'},
  { label : 'About', link: '/about'},
  { label : 'Contact', link: 'mailto:google@gmail.com'},
];
}
