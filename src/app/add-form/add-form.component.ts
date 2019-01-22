import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { Animal } from '../models/animal';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  model = new Animal('', '', '', '');
  submitted = false;

  constructor(public _apiService: ApiService) {}

  ngOnInit() {}

  addAnimal() {
    this._apiService.addOne(this.model);
    this.updateAnimalList();
  }

  updateAnimalList() {
    this._apiService.getAll().subscribe();
  }

}


