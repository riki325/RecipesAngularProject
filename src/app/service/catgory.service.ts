import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Category from 'src/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http :HttpClient) { }
  baseRouteUrl=`${environment.baseUrl}/category`
  GetAllCategories() {
    return this.http.get<Category[]>(`${this.baseRouteUrl}/GetAllCategories`)
}
  GetCategoryById(id:number){
    return this.http.get<Category>( `${this.baseRouteUrl}/GetCategoryById?id= ${id}`);
  }
}
