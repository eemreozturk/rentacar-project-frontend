import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MenuComponent, MenuItem } from '../../../../shared/components/menu/menu.component';
import { BrandListItemDto } from '../../../models/brand-list-item-dto';
import { BrandsService } from '../../services/brands.service';



@Component({
  selector: 'app-brand-list-menu',
  standalone: true,
  imports: [
    CommonModule,MenuComponent
  ],
  templateUrl: './brand-list-menu.component.html',
  styleUrl: './brand-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandListMenuComponent  implements OnInit{
  brands !: BrandListItemDto []

  
  //brandsService: BrandsService;
  constructor(private brandsService:BrandsService){
    //this.brandsService=brandsService;
  }

  ngOnInit(): void {
    this.getBrandsList()
  }
  getBrandsList() {
   this.brands = this.brandsService.getBrands();
  }
 

  get brandsMenuItems(): MenuItem[] {
    return this.brands.map(brand => ({
      
        label: brand.name,
        click: (event: MouseEvent) => console.log(`Brand ${brand.name} clicked`),
        
    }));
  
  }

}
