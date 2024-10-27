import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { LoginTypes } from "../types/LoginTypes";
import { loginBoolean } from "../services/apiLogin";
const useLoginData = (): UseMutationResult<LoginTypes, Error, LoginTypes> => {
  return useMutation<LoginTypes, Error, LoginTypes>({
    mutationFn: (creds: LoginTypes) => loginBoolean(creds),
    onSuccess: () => {},
    onError: () => {},
  });
};

export default useLoginData;
