export class Book {
  constructor(
    public id: number,
    public title: string,
    public bookName: string,
    public image: string,
    public recipientUser: string,
    public senderUser: string,
    public published_at: Date,
    public status: number,
    public type: number,
    public author: string
  ) {}

  public static adapt(item: any): Book {
    return new Book(
      item.id,
      item.bookName,
      item.bookName,
      item.image,
      item.recipientUser,
      item.senderUser,
      item?.published_at,
      item.status,
      item.type,
      item?.author
    );
  }
}
