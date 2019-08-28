import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../services/recipie.serve';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recipes: Recipie[];

  constructor(private recipeService: RecipieService) {
    // console.log("In recipie list :");
  }
  
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    //console.log(this.recipes);
  }
}
