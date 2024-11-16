export type TOrganization = {
  id: string;
  logo?: string;
  name: string;
  description?: string;
}

export type TMemberOrganization = {
  organization_id: TOrganization['id'];
}