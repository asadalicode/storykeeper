export class Category {
  constructor(public id: number, public caregoryName: string) {}

  public static adapt(item: any): Category {
    return new Category(item.id, item.caregoryName);
  }
}
export class QACategory {
  constructor(
    public id: number,
    public qaCategoryId: number,
    public title: string,
    public description: string,
    public type: number
  ) {}

  public static adapt(item: any): QACategory {
    return new QACategory(item.id, item.qaCategoryId, item.title, item.description, item.type);
  }
}
