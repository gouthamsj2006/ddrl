import create from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  session: null,
  isLoading: true,
  error: null,

  setUser: (user) => set({ user, isLoading: false }),
  setSession: (session) => set({ session, isLoading: false }),
  setError: (error) => set({ error, isLoading: false }),
  resetAuthState: () => set({ user: null, session: null, isLoading: false, error: null }),
}));

export default useAuthStore;