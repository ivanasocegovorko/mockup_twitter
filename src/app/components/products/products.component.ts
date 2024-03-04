import { Component, OnInit } from '@angular/core';
import { Item } from "src/app/models/item";
import { ItemService } from "src/app/services/item.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  itemList: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  onDelete(id: number) {
    this.itemService.deleteItemById(id).subscribe(response => {
      console.log(response);
      this.loadItems();
    });
  }

  loadItems() {
    this.itemService.getAllItems().subscribe(foundItems => {
      console.log(foundItems);
      this.itemList = foundItems;
    });
  }

  loadSortedItemsByPrice() {
    this.itemService.sortByPrice().subscribe(foundSortedItems => {
      console.log(foundSortedItems);
      this.itemList = foundSortedItems;
    });
  }

  loadSortedItemsByName() {
    this.itemService.sortByName().subscribe(foundSortedItems => {
      console.log(foundSortedItems);
      this.itemList = foundSortedItems;
    });
  }
}
