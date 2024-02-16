import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private favoriteRecipes$ = new BehaviorSubject<Recipe[] | null>(null);

  constructor() { }

  get getFavoriteRecipes$() {
    return this.favoriteRecipes$.asObservable();
  }

  setFavoriteRecipies(recipes: Recipe[]) {
    this.favoriteRecipes$.next(recipes);
  }

}
