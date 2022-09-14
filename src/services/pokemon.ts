import { AxiosResponse } from "axios";
import { pokemonApi } from "./pokemonApi";

export async function getAll(page: number, limit = 20): Promise<AxiosResponse> {
  console.log(page);
  
  const response = await pokemonApi.get('/pokemon', {
    params: {
      limit,
      offset: page === 0 ? page : page * limit
    }
  })
  return response
}
