import { Component, OnInit } from '@angular/core';
import { Item } from "src/app/models/item";
import { ItemService } from "src/app/services/item.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemList: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(foundItems => {
      this.itemList = foundItems;
    })
  }

}
