export class BookImage {
  constructor(public bookId: number, public fileName: string) {}

  public static adapt(item: any): BookImage {
    return new BookImage(item.id, item.image);
  }
}
