import { Component, Input, Output } from '@angular/core';
import { Inventory, UpdateItemEvent } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  @Input()
  INVENTORY!: Inventory[]

  @Output()
  onCartUpdate = new Subject<UpdateItemEvent>();

  updateCart(key: string, qtyUpdate: number) {
    //console.info(`updating key: ${key} | + ${delta}`)

    const event: UpdateItemEvent = {
      // Mapping obj to values passed in
      //key: key,
      //qtyUpdate: qtyUpdate
      key, qtyUpdate  // shorthand for above
    }

    // Fire event
    this.onCartUpdate.next(event)
  }
}
