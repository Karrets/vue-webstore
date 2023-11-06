import type { StoreItem } from '@/models/StoreItem';
import { CheckoutItem } from '@/models/CheckoutItem';

export class ShoppingCart {
  addItem(item: StoreItem, type: string) {
    const wrapped = new CheckoutItem(item, type);

    if (this[wrapped.checkoutID]) this[wrapped.checkoutID].qty++;
    else this[wrapped.checkoutID] = wrapped;
  }
}
