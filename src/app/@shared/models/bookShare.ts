export class BookShare {
  constructor(public id: number | null, public bookId: number | null, public email: string, public shareDate: string) {}

  public static adapt(item: any): BookShare {
    return new BookShare(item.id, item.bookId, item.email, item.shareDate);
  }
}
