import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipie.model';
import { RecipieService } from './services/recipie.serve';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipieService]
})
export class RecipiesComponent implements OnInit {

  selectedRecipe: Recipie;
  rService : RecipieService;
  constructor(private recipieService: RecipieService) { 
    this.rService = recipieService;
    console.log("In recipies component : "+this.rService);
  }

  ngOnInit() {
    this.rService.recipeSelected.subscribe(
      (recipie: Recipie) => {
        this.selectedRecipe = recipie;
        console.log("recipies service call result :"+this.selectedRecipe);
      }
      
      );
  }

}
