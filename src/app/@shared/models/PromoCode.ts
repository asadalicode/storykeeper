export class PromoCode {
  constructor(public id: number, public code: string, public discountInCents: number, public isActive: boolean) {}

  public static adapt(item: any): PromoCode {
    return new PromoCode(item.id, item.code, item.discountInCents, item.isActive);
  }
}
