"use server"
import { createClient } from "@/utils/supabase/server";
import { getUserData } from "@/app/actions";
import { TMemberOrganization, TOrganization } from "@/types/Organization";
import { TService } from "@/types/Services";
import { encodedRedirect } from "@/utils/utils";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function getAllServices() {
  const supabase = await createClient();
  try {
    const organization = await getUserOrganization();
    console.log(organization);
    if (organization?.organization_id) {
      const { data, error } = await supabase
        .from('services')
        .select(`
        id,
        name,
        created_at,
        updated_at
      `)
        .order('updated_at', { ascending: false })
        .eq('organization_id', organization?.organization_id);
      if (error) {
        throw new Error(error.message, { cause: 'Query'})
      }
      return data as TService[];
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getById(id: string) {
  const supabase = await createClient();
  const serviceData = {};
  try {
    const organization = await getUserOrganization();
    const { data, error } = await supabase
      .from('services')
      .select(`
        id,
        name,
        description
      `)
      .eq('id', id)
      .eq('organization_id', organization?.organization_id)
      .maybeSingle();
    if (error) {
      throw new Error(error.message, { cause: 'Query'})
    }
    if (!data) {
      throw new Error('not found');
    }
    return data as TService;
  } catch (error) {
    redirect('/not-found');
  }
}

export async function insertService(formData: FormData) {
  const supabase = await createClient();
  const name = formData.get('name') as string;
  const description = formData.get('name') as string;
  let id = null;
  try {
    const organization = await getUserOrganization();
    const { user } = await getUserData();
    const { data, error } = await supabase
      .from('services')
      .insert(
        {
          organization_id: organization.organization_id,
          name,
          description,
          created_by: user?.id,
        })
      .select()
      .single();

    if (error) throw new Error(error.message);
    if (data?.id) {
      id = data.id;
    }
    encodedRedirect('error', `/services/create`, 'Error creating service!');
  } catch (error) {
    console.error(error);
  }

  if (id) {
    redirect(`/services/${id}`);
  }
}

export async function updateService(formData: FormData, id: string) {
  const supabase = await createClient();
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  try {
    const organization = await getUserOrganization();
    const { user } = await getUserData();
    const { data, error } = await supabase
      .from('services')
      .update(
        {
          name,
          description,
          updated_by: user?.id
        })
      .eq('id', id)
      .eq('organization_id', organization?.organization_id)
      .select()
      .single();

    if (error) throw new Error(error.message);
    console.log(data);

  } catch (error) {
    console.error(error);
    encodedRedirect('error', `/services/${id}`, 'Error updating service!');
  }
  revalidatePath(`/services/${id}`);
  encodedRedirect('success', `/services/${id}`, 'Successfully updated service!');
}

export async function getUserOrganization() {
  const supabase = await createClient();
  const { user } = await getUserData();
  const { data, error } = await supabase
    .from('members')
    .select('organization_id')
    .eq('user_id', user?.id)
    .single();

  return data as TMemberOrganization;
}