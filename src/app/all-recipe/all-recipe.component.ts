import { Component, OnInit } from '@angular/core';
import Recipe from 'src/models/Recipe';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {
  recipesArr:Recipe[]=[]
  constructor(public recipeService:RecipeService) { }

  ngOnInit(): void {   this.recipeService.GetAllRecipes().subscribe(
      (succ)=>{this.recipesArr=succ},
      (err) => {
        alert("התרחשה שגיאה בקבלת הנתונים");
        console.log(err)
      })
  }

}
