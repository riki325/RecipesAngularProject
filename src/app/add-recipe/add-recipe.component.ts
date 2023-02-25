import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Layer from 'src/models/Layer';
import Recipe from 'src/models/Recipe';
import { RecipeService } from 'src/services/recipe.service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  constructor(public recipeService: RecipeService, public router: Router) { }
  currentRecipe:Recipe=new Recipe(0,"",0,0,0,new Date(),[],[""],0,"",false);
  emptyLayer:Layer=new Layer("",[])
  comp="";
  prep=" ";
  newLayer() {
    this.currentRecipe.Layers.push(this.emptyLayer);
    this.emptyLayer.Components = [];
    this.emptyLayer.Description=" "
  }
  newComp() {
    this.emptyLayer.Components.push(this.comp);
    this.comp = " ";
  }
  newPrep() {
    this.currentRecipe.Prepration.push(this.prep);
    this.prep = " ";
  }
  addRecipe() {
    let d = new Date(Date.now());
    this.currentRecipe.UserId = parseInt(localStorage.getItem('userId'));
    
    this.recipeService.AddRecipe(this.currentRecipe).subscribe(succ => {
      console.log(succ);
    })
    this.router.navigate(['allRecipes']);
   // swal("Good job!", "You clicked the button!", "success");
  }





  ngOnInit(): void {
  }

}


