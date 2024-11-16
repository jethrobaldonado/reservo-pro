import { create } from 'zustand';
import { TUser } from "@/types/UserDetails";

export const useAuthStore = create((set) => ({
  user: {},
  setUserDetails: (userData: TUser) => set(() => ({
    user: userData,
  })),
}));
