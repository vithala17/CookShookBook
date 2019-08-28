import { Recipie } from '../recipie.model';
import { EventEmitter } from '@angular/core';

export class RecipieService {

    recipeSelected = new EventEmitter<Recipie>();

    private recipes: Recipie[] = [
        new Recipie("test recipie", "a test that can make you spin like a ball", "https://www.tibco.com/blog/wp-content/uploads/2015/11/tada.png"),

        new Recipie("Rajma Chawal", "India's favourite", "http://www.yummyfoodrecipes.in/resources/picture/org/Easy-Rajma-Chawal.jpg"),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}