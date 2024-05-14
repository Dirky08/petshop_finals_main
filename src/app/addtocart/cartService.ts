// cartService.ts

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class cartService {
  cartItems: { name: string, price: number, quantity: number }[] = [];

  // Other properties and methods may be here

  addItem(item: string) {
    const [productName, price] = item.split(':');
    // Add item logic here, such as adding the product to the cart
  }

  // Define other methods as needed
}
