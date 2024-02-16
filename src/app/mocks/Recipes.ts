import { Recipe } from "../models/Recipe";

export const recipes: Recipe[] = [
    {
        name: 'Pasta Alfredo',
        cookingTime: 30,
        difficulty: 'Mediu',
        isVegetarian: false,
        estimatedPrice: 10,
        isFavorite: false
    },
    {
        name: 'Salată Caesar',
        cookingTime: 15,
        difficulty: 'Ușor',
        isVegetarian: true,
        estimatedPrice: 8,
        isFavorite: false
    },
    {
        name: 'Risotto cu ciuperci',
        cookingTime: 40,
        difficulty: 'Mediu',
        isVegetarian: true,
        estimatedPrice: 12,
        isFavorite: false
    },
    {
        name: 'File de somon la grătar',
        cookingTime: 20,
        difficulty: 'Ușor',
        isVegetarian: false,
        estimatedPrice: 15,
        isFavorite: false
    },
    {
        name: 'Tiramisu',
        cookingTime: 45,
        difficulty: 'Dificil',
        isVegetarian: true,
        estimatedPrice: 20,
        isFavorite: true
    },
];