import { Component, OnInit, Input } from '@angular/core';
import { Recipie } from '../../recipie.model';
import { RecipieService } from '../../services/recipie.serve';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent implements OnInit {

  @Input() recipie: Recipie;

  constructor(private recipieService: RecipieService) {
  }
  
  ngOnInit() {
  }
  
  onSelected(){
    console.log("in recipe item : "+ this.recipie);
    this.recipieService.recipeSelected.emit(this.recipie);
  }
}
