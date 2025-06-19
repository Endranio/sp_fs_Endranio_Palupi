import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { RegisterDTO } from "@/schema/auth-schema";

type useAuthStore = {
  user: RegisterDTO;
  setUser: (payload: RegisterDTO) => void;
  logout: () => void;
};

export const useAuthStore = create<useAuthStore>()(
  devtools(
    persist(
      (set) => ({
        user: {} as RegisterDTO,
        setUser: (payload: RegisterDTO) =>
          set((state) => ({ user: { ...state.user, ...payload } })),
        logout: () => set(() => ({ user: {} as RegisterDTO })),
      }),
      {
        name: "token",
        partialize: (state) => ({ user: state.user }),
      },
    ),
  ),
);
