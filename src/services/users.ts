import { AxiosResponse } from "axios"
import { api } from "./api"

export interface User {
  name: string
  id: string
  email: string
  createdAt: string
}

export async function login(email: string, password: string): Promise<AxiosResponse> {
  const response = await api.post('/users/login', { email, password })
  return response
}
