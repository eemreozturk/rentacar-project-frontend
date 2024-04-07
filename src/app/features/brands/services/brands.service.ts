import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
data=[
  {id: 1, name: 'Bmw'},
  {id: 2, name: 'Mercedes-Benz'}
];
  constructor() { }
  getBrands(){
    return this.data;
}
}
