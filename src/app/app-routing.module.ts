import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LoginComponent } from './login/login.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'allRecipes', component: AllRecipeComponent },
    { path: 'detail/:id', component: RecipeDetailsComponent },
  // { path: 'editRecipe/:id', component: EditRecipeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/:name', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogOutComponent },
   { path: 'addRecipe', component: AddRecipeComponent },
  { path: '', component: AllRecipeComponent },
  { path: '**', component: AllRecipeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
