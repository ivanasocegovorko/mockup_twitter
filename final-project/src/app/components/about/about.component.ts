import { Component } from '@angular/core';
import { Item } from "src/app/models/item";
import { ItemService } from "src/app/services/item.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  itemList: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(foundItems => {
      this.itemList = foundItems;
    })
  }
}
