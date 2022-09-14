import { AxiosResponse } from "axios";
import { pokemonApi } from "./pokemonApi";

export async function getAll(page: number, limit = 20): Promise<AxiosResponse> {
  const response = await pokemonApi.get('/pokemon', {
    params: {
      limit,
      offset: page === 0 ? page : page * limit
    }
  })
  return response
}

export async function getPokemonByName(name: string): Promise<AxiosResponse> {
  const response = await pokemonApi.get(`/pokemon/${name}`)
  return response
}

export async function getPokemonByType(type: string): Promise<AxiosResponse> {
  const response = await pokemonApi.get(`/type/${type}`)
  return response
}
