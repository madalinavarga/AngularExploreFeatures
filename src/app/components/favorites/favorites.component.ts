import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit, OnDestroy {
  recipesService = inject(RecipesService);
  isOpen: boolean = false;
  favoritesRecipes: Recipe[] | null = null;
  private subscription = new Subscription();


  seeFavorites() {
    this.isOpen = !this.isOpen;
    this.subscription = this.recipesService.getFavoriteRecipes$.subscribe({
      next: (data) => {
        this.favoritesRecipes = data;
      }
    });
  }

  removeFromFavorites(recipe: Recipe) {
    recipe.isFavorite = false;
    let filter = this.favoritesRecipes?.map(r => recipe.name === r.name ? recipe : r);
    this.recipesService.setFavoriteRecipies(filter!);
    this.favoritesRecipes = this.favoritesRecipes?.filter(r=>!r.isFavorite)!
  }

  ngOnInit(): void {
    this.subscription = this.recipesService.getFavoriteRecipes$.subscribe({
      next: (data) => {
        this.favoritesRecipes = data;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
