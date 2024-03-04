import { Injectable } from '@angular/core';
import { Item } from "../models/item";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  dataSource: string = "http://localhost:3000/items";

  title: string = "Store Items";

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.dataSource);
  };

  getItemById(id: number): Observable<Item> {
    return this.http.get<Item>(this.dataSource + "/" + id);
  };

  createNewItem(newItem: Item): Observable<Item> {
    return this.http.post<Item>(this.dataSource, newItem);
  };

  editItemById(id: number, editedItem: Item): Observable<Item> {
    return this.http.put<Item>(this.dataSource + "/" + id, editedItem);
  };

  deleteItemById(id: number): Observable<any> {
    return this.http.delete<any>(this.dataSource + "/" + id)
  };

  sortByPrice(): Observable<Item[]> {
    return this.http.get<Item[]>(this.dataSource + "/?_sort=price");
  };

  sortByName(): Observable<Item[]> {
    return this.http.get<Item[]>(this.dataSource + "/?_sort=name");
  };

}
