export class TemplateQuestion {
  constructor(public id: number, public question: string, public description: string, public categoryId: number) {}

  public static adapt(item: any): TemplateQuestion {
    return new TemplateQuestion(item.id, item.question, item.description, item.categoryId);
  }
}
