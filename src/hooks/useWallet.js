import { useUser } from "../context/UserContext";

export function useWallet() {
  const { wallet, setWallet } = useUser();
  const pay = (amount) => setWallet((b) => +(b - amount).toFixed(2));
  const addMoney = (amount) => setWallet((b) => +(b + amount).toFixed(2));
  return { wallet, pay, addMoney };
}
