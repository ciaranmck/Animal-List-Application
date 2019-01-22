import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private _httpClient: HttpClient) { }

  url = 'http://localhost:3000';

  getAll() {
    return this._httpClient.get(this.url + `/all`);
  }

  getOne(animal) {
    return this._httpClient.get(this.url + `/info/${animal}`);
  }

  addOne(animal) {
    this._httpClient.post(this.url + `/add`, animal).subscribe();
  }

  deleteOne(animal) {
    this._httpClient.post(this.url + `/delete`, animal, {responseType: 'arraybuffer'}).subscribe();
  }

}
