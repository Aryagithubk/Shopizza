import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';//todo
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
import allPizza from './my-app.foods';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Food[]> {
    return of(allPizza);//todo
  }

  getAllFoodsBySearchTerm(searchTerm: string): Observable<Food[]> {
    const filteredFoods = allPizza.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return of(filteredFoods);
  }

  // getAllTags(): Observable<Tag[]> {
  //   // Return an observable of sample_tags array
  //   return of(sample_tags);
  // }

  getAllTags(): Observable<Tag[]> {
    // Create a map to store tag counts
    const tagMap = new Map<string, number>();

    // Iterate through all food items to count tags
    allPizza.forEach((food) => {
      if (food.tags) {
        food.tags.forEach((tag) => {
          if (tagMap.has(tag)) {
            tagMap.set(tag, tagMap.get(tag)! + 1);
          } else {
            tagMap.set(tag, 1);
          }
        });
      }
    });

    // Convert the map to an array of Tag objects
    const tags: Tag[] = Array.from(tagMap).map(([name, count]) => ({
      name,
      count,
    }));

    // Return an observable of tags array
    return of(tags);
  }

  // getAllFoodsByTag(tag: string): Observable<Food[]> {
  //   // Filter foods based on the provided tag
  //   if (tag === 'All') {
  //     return of(sample_foods);
  //   } else {
  //     const filteredFoods = sample_foods.filter((food) =>
  //       food.tags?.includes(tag)
  //     );
  //     return of(filteredFoods);
  //   }
  // }
  getAllFoodsByTag(tag: string): Observable<Food[]> {
    // Filter foods based on the provided tag
    if (tag === 'All') {
      return of(allPizza);
    } else {
      const filteredFoods = allPizza.filter((food) => food.tags?.includes(tag));
      return of(filteredFoods);
    }
  }

  // getFoodById(foodId: string): Observable<Food | undefined> {
  //   // Find the food with the provided ID in the local array
  //   const foundFood = allPizza.find((food) => food.id === foodId);
  //   return of(foundFood); // Return the found food or undefined
  // }

  getFoodById(foodId: string): Observable<Food | undefined> {
    // Find the food with the provided ID in the local array
    const foundFood = allPizza.find((food) => food.id === foodId);
    return of(foundFood); // Return the found food or undefined
  }
}
