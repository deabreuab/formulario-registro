// services/userService.ts
import { IRegisterForm } from "../types";
import { api } from "./api";

export const userService = {
  register: async (data: IRegisterForm) => {
    const response = await api.post("auth/register", data);
    return response.data;
  },
};
