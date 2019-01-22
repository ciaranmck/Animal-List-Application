import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  public animals$: Observable<any>;

  constructor(
    public _apiService: ApiService,
  ) {}

  ngOnInit() {
    this.animals$ = this.getAllAnimals();
  }

  getAllAnimals() {
    return this._apiService.getAll();
  }

}
