export class StoryFile {
  constructor(public url: string) {}

  public static adapt(item: any): StoryFile {
    return new StoryFile(item?.url ? item?.url : '');
  }
}
