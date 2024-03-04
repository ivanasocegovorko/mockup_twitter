import { Component, OnInit } from '@angular/core';
import { ItemService } from "src/app/services/item.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Item } from "src/app/models/item";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  id: number = 0;

  currentItem: Item = new Item()

  constructor(private itemService: ItemService, private actRoute: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.itemService.getItemById(this.id).subscribe(foundItem => {
      this.currentItem = foundItem;
    });
  }

  onDelete(id: number) {
    this.itemService.deleteItemById(id).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/products")
    });
  }
}
