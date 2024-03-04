import { Component, OnInit } from '@angular/core';
import { Item } from "src/app/models/item";
import { ItemService } from 'src/app/services/item.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: number = 0;

  currentItem: Item = new Item  ();

  constructor(private itemService: ItemService, private actRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.itemService.getItemById(this.id).subscribe(foundItem => {
      console.log(foundItem);
      this.currentItem = foundItem;
    });
  }

  onSubmit () {
    this.itemService.editItemById(this.id, this.currentItem).subscribe(edditedItem => {
      console.log(edditedItem);
      this.route.navigateByUrl("/products");
    })
  }

}
