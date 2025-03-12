import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (user) => {
      toast.success(`Account successfully created! Please verify the new account from the ${user}'s email adress.`);
    },
    onError: (err) => {
      console.error(err.message);
    },
  });

  return { signup, isLoading };
}
