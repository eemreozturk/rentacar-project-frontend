import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export type NavItem= {
label:string;
link:string;
};

export type NavTitle ={
  text: string;
  routerLink ?: string | string[] ;
} | undefined;
//export type navItem=NavItemInterface;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() title: NavTitle;
  @Input() navItems : NavItem []=[];

isUrl(url : string): boolean{
  return (url.startsWith('http') || url.startsWith('https') || url.startsWith('mailto') || url.startsWith('tel'));
  const urlRegex = new RegExp ( / ( https: \/\/ www \. | http: \/\/ www \. | https: \/\/ | http: \/\/ ) ? [ a-zA-Z0-9 ] {2,} ( \. [ a-zA-Z0-9 ] {2,} )( \. [ a-zA-Z0-9 ] {2,} ) ? / );
  return urlRegex.test(url);
}
}
