import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-animal-info',
  templateUrl: './animal-info.component.html',
  styleUrls: ['./animal-info.component.scss']
})
export class AnimalInfoComponent implements OnInit {
  animal;

  constructor(
    public _apiService: ApiService,
    public _route: ActivatedRoute,
    public _router: Router
    ) {}

  ngOnInit() {
    this.getAnimal();
  }

  getAnimal() {
    this._route.params.subscribe(res => {
      this._apiService.getOne(res.animal).subscribe(animal => {
        this.animal = animal;
      });
    });
  }

  deleteAnimal() {
    this._apiService.deleteOne(this.animal);
    this.updateAnimalList();
  }

  updateAnimalList() {
    this._apiService.getAll().subscribe();
  }
}
