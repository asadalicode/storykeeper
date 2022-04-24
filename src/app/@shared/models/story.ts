export class Story {
  constructor(
    public id: number,
    public question: string,
    public description: string,
    public answer: string,
    public bookId: number,
    public status: number,
    public answerUploadDate: Date,
    public answerLastModificationDate: Date
  ) {}

  public static adapt(item: any): Story {
    return new Story(
      item.id,
      item.question,
      item.description,
      item.fileName,
      item.bookId,
      item.status,
      item?.answerUploadDate,
      item?.answerLastModificationDate
    );
  }
}
