export class ImageCredientials {
  constructor(
    public acl: string,
    public is_version: boolean,
    public key: string,
    public policy: string,
    public success_action_status: 'success-action-status',
    public upload_url: string,
    public x_amz_algorithm: string,
    public x_amz_credential: string,
    public x_amz_date: string,
    public x_amz_meta_owner: string,
    public x_amz_security_token: any,
    public x_amz_signature: string
  ) {}

  public static adapt(item: any): ImageCredientials {
    return new ImageCredientials(
      item.acl,
      item.is_version,
      item.key,
      item.policy,
      item.success_action_status,
      item.upload_url,
      item.x_amz_algorithm,
      item.x_amz_credential,
      item.x_amz_date,
      item.x_amz_meta_owner,
      item.x_amz_security_token,
      item.x_amz_signature
    );
  }
}
