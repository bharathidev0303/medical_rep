// store.ts
import { create } from 'zustand';

// Define types for your state
interface StoreState {
  username: string;
  otp: string;
  otpToken: string;
  token: string;
  refreshToken: string;
  authChannel: string;
  customers: Customer[]; // Use a more specific type for customers
  // files: any[];
}

// Define types for actions
interface StoreActions {
  setUsername: (username: string) => void;
  setOtp: (otp: string) => void;
  setOtpToken: (token: string) => void;
  setToken: (token: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  setAuthChannel: (authChannel: string) => void;
  setCustomers: (customers: Customer[]) => void;
  // setFiles: (files: any[]) => void;
}

// Combine state and actions into one type
type Store = StoreState & StoreActions;

// Create the store with types
const useStore = create<Store>(set => ({
  username: "",
  otp: "",
  otpToken: "",
  token: "",
  refreshToken: "",
  authChannel: "",
  customers: [],
  // files: [],

  setUsername: (username: string) => set({ username }),
  setOtp: (otp: string) => set({ otp }),
  setOtpToken: (token: string) => set({ otpToken: token }),
  setToken: (token: string) => set({ token }),
  setRefreshToken: (refreshToken: string) => set({ refreshToken }),
  setAuthChannel: (authChannel: string) => set({ authChannel }),
  setCustomers: (customers: Customer[]) => set({ customers }),
  // setFiles: (files: any[]) => set({ files }),
}));

export default useStore;

// Define Customer type
interface Customer {
  inviteId: string;
  name: string;
  // Add other customer properties here
}
