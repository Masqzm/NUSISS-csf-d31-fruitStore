import { Component } from '@angular/core';
import { Cart, Inventory, INVENTORY, LineItem, UpdateItemEvent } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Inventory items (const)
  FRUIT_STORE = INVENTORY

  // Cart obj declaration
  cart: Cart = { 
    lineItems: [],
    grandTotal: 0
  }

  updateCart($event: UpdateItemEvent) {
    // Find item in cart
    let idx = this.cart.lineItems.findIndex(li => li.key == $event.key) // find li where li.key == $event.key

    if(idx >= 0) {
      // Update qty & total cost of item in cart
      this.cart.lineItems[idx].quantity += $event.qtyUpdate
      this.cart.lineItems[idx].totalCost = this.cart.lineItems[idx].quantity * this.cart.lineItems[idx].itemInfo.unitPrice

      // Remove item from cart when qty reach 0
      if(this.cart.lineItems[idx].quantity <= 0) 
        this.cart.lineItems.splice(idx, 1)

      this.updateGrandTotal($event.key, $event.qtyUpdate)
    } else if($event.qtyUpdate > 0) {
      // Add to cart if item didnt exist previously
      const inventory = this.FRUIT_STORE.find(inv => inv.key == $event.key)

      // If such store item exists
      if(inventory) {
        let newItem: LineItem = {
          key: inventory.key,         // by right should be a rand gen id
          itemInfo: inventory,
          quantity: $event.qtyUpdate,
          totalCost: inventory.unitPrice * $event.qtyUpdate
        }
        this.cart.lineItems.push(newItem)
      }

      this.updateGrandTotal($event.key, $event.qtyUpdate)
    }
  }

  updateGrandTotal(invKey: string, qty: number) {
    // Update grand total
    const inventory = this.FRUIT_STORE.find(inv => inv.key == invKey)

    // If such store item exists
    if(inventory) 
      this.cart.grandTotal += inventory.unitPrice * qty
  }
}