export class Story {
  constructor(
    public question: string,
    public description: string,
    public answer?: string,
    public answerLastModificationDate?: string,
    public answerUploadDate?: string,
    public bookId?: number,
    public id?: number
  ) {}

  public static adapt(item: any): Story {
    return new Story(
      item.question,
      item.description,
      item.answer,
      item.answerLastModificationDate,
      item.answerUploadDate,
      item.bookId,
      item.id
    );
  }
}
