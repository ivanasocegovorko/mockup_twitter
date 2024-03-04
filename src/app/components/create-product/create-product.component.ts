import { Component, OnInit } from '@angular/core';
import { Item } from "src/app/models/item";
import { ItemService } from 'src/app/services/item.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  newItem: Item = new Item();

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {
  };

  onSubmit() {
    this.itemService.createNewItem(this.newItem).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/products");
    });
  }

}
