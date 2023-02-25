import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import Recipe from 'src/models/Recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent implements OnInit {
  @Input()
  recipe:Recipe;
  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  loadRecipeDetails() {
    this.route.navigate([`detail/${this.recipe.Id}`])}
}
