import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  constructor(private http: HttpClient) {}

  getCharacteres(params: any) {
    return this.http.get(environment.baseUrl + environment.character, {
      params,
    });
  }

  getCharacteresById(id: string) {
    return this.http.get(environment.baseUrl + environment.character + id);
  }

  getByUrl(url: string) {
    return this.http.get(url);
  }
}
