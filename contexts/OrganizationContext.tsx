"use client";

import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { TOrganization } from "@/types/Organization";

export const OrganizationContext = createContext<{ organization: TOrganization | null }>({
  organization: null,
});
export function OrganizationProvider({ children }: { children: ReactNode }) {
  const [organization, setOrganization] = useState<TOrganization | null>(null);
  const supabase = createClient();
  const fetchOrganization = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('organization')
        .select('id, name, logo, description')
        .single();
      if (error) {
        throw new Error(error.message);
      }
      console.log(data);
      setOrganization(data)
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchOrganization();
  }, [fetchOrganization]);

  return (
    <OrganizationContext.Provider value={{ organization }}>
      {children}
    </OrganizationContext.Provider>
  );
}