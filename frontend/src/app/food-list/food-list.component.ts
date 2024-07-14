import { Component, OnInit } from '@angular/core';
import { FoodService } from '../data.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
  standalone: true, 
  imports: [CommonModule]
})
export class FoodListComponent implements OnInit {
  foodItems: string[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.fetchFoodItems();
  }

  fetchFoodItems(): void {
    this.foodService.getFoodItems().subscribe(
      (data) => {
        this.foodItems = data;
      },
      (error) => {
        console.error('Error fetching food items', error);
      }
    );
  }
}
