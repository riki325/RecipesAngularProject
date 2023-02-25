import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Recipe from 'src/models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public http: HttpClient) {  }
  baseRouteUrl = `${environment.baseUrl}/Recipe`
 
  getAllRecipes() {
    return this.http.get<Recipe[]>(`${this.baseRouteUrl}/GetAllRecipes`);
  }

 async addRecipe(Recipe:Recipe){
    return await this.http.post<Recipe>(`${this.baseRouteUrl}/AddRecipe/? recipe=${Recipe}`,Recipe)
  }
  updateRecipe(r:Recipe){
    console.log(r);
    return this.http.put<Recipe>(`${this.baseRouteUrl}/UpdateRecipe`,r)
}
getRecipesByCategoryId(idCat:number){
    return this.http.get<Recipe[]>(`${this.baseRouteUrl}/GetRecipesByCategoryId/${idCat}`)
}
getRecipeById(id: number) {
  return this.http.get<Recipe>(`${this.baseRouteUrl}/GetRecipeById/${id}`)
}
}
