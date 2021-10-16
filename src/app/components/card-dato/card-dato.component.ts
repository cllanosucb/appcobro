import { Component, Input, OnInit } from '@angular/core';
import { list } from 'src/app/interfaces/data.model';

@Component({
  selector: 'app-card-dato',
  templateUrl: './card-dato.component.html',
  styleUrls: ['./card-dato.component.scss'],
})
export class CardDatoComponent implements OnInit {

  @Input() lista: list[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.lista);
  }

}
