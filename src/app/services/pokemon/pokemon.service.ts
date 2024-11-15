import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getData(url: string): Promise<any> {
    return axios.get(url)
    .then((response: any) => response.data)
    .catch((error: any) => {
      console.error('Error fetching data:', error);
      throw error;
    });
  }
}
