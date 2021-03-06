export class Profile {
  constructor(
    public id: number,
    public isDeleted: boolean,
    public deteleDate: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public role: string,
    public emailReminder: boolean,
    public emailNotification: boolean,
    public image: string
  ) {}

  public static adapt(item: any): Profile {
    return new Profile(
      item.id,
      item.isDeleted,
      item.deteleDate,
      item.firstName,
      item.lastName,
      item.email,
      item.role,
      item.isUnsubscribedFromEmailReminders,
      item.isUnsubscribedFromEmailNotifications,
      item.image
    );
  }
}

export class UserEmail {
  constructor(public id: number, public email: string, public status: string) {}

  public static adapt(item: any): UserEmail {
    return new UserEmail(item.id, item.email, item.status);
  }
}
