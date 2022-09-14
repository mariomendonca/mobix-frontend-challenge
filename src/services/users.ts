import { AxiosResponse } from "axios"
import { api } from "./api"

export interface User {
  name: string
  id: string
  email: string
  createdAt: string
}

export async function login(email: string, password: string): Promise<AxiosResponse> {
  const response = await api.post<User>('/users/login', { email, password })
  return response
}

export async function getById(id: string): Promise<AxiosResponse> {
  const response = await api.get<User>(`/users/${id}`)
  return response
}