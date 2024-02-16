import { Component, inject } from '@angular/core';
import { SearchComponent } from '../../search/search.component';
import { Recipe } from '../../models/Recipe';
import { recipes } from '../../mocks/Recipes';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, CommonModule, CardComponent, FavoritesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  recipesService = inject(RecipesService)

  recipes: Recipe[] = recipes;
  filteredRecipes = recipes;
  inputFilter = '';

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
    console.log("index: item", index, item)
    return item.name;
  }
}
