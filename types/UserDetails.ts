export type TUser = {
  id: string;
  email: string;
  userMeta: TUserMeta;
};

export type TUserMeta = {
  displayName?: string;
}