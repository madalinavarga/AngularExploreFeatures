import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  private cdr = inject(ChangeDetectorRef);
  @Input() recipe!: Recipe;
  @Output() setFavorite = new EventEmitter<Recipe>();
  heartIcon = faHeart
  iconStyle: string = ""

  addFavorite() {
    this.recipe.isFavorite = !this.recipe.isFavorite;
    this.setFavorite.emit(this.recipe);
    this.cdr.markForCheck();
  }
  //ngClass
  getStyle() {
    return {
      'text-2xl': true,
      'cursor-pointer': true,
      'text-red-500': this.recipe.isFavorite,
      'text-gray-400': !this.recipe.isFavorite,
      'hover:text-red-500': !this.recipe.isFavorite,
    };
  }
}
