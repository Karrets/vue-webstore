import { StoreItem } from '@/models/StoreItem';

export class CheckoutItem extends StoreItem {
  checkoutID: string;
  type: string;
  qty: number;

  constructor(source: CheckoutItem, purchaseType: string) {
    super(source);

    if (source.qty) this.qty = source.qty;
    else this.qty = 1;

    if (source && !this.options.includes(purchaseType))
      throw new Error(`Bad purchase type of ${purchaseType}`);

    this.type = purchaseType;
    this.checkoutID = `${this.id}-${purchaseType}`;
  }
}
