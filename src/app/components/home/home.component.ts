import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { SearchComponent } from '../../search/search.component';
import { Recipe } from '../../models/Recipe';
import { recipes } from '../../mocks/Recipes';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { RecipesService } from '../../services/recipes.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, CommonModule, CardComponent, FavoritesComponent, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewChecked {
  @ViewChild('input', { static: false }) input!: ElementRef;
  recipesService = inject(RecipesService)

  recipes: Recipe[] = recipes;
  filteredRecipes = recipes;
  inputFilter = '';

  ngAfterViewChecked(): void {
    this.input.nativeElement.value = "Ceva"
    // nu merge
    console.log("hi", this.input)
  }

  receiveInput($event: string) {
    this.inputFilter = $event;
    if ($event) {
      this.filteredRecipes = this.recipes.filter(recipe => recipe.name.toLowerCase().includes($event.toLowerCase()));
    } else {
      this.filteredRecipes = this.recipes
    }
  };

  updateRecipe($event: Recipe) {
    this.filteredRecipes = this.filteredRecipes.map(recipe => recipe.name === $event.name ? $event : recipe);
    this.recipesService.setFavoriteRecipies(this.filteredRecipes.filter((rec) => rec.isFavorite));
  }

  implementTrackFn(index: number, item: Recipe) {
    return item.name;
  }
}
