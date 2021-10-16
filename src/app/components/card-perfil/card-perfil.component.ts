import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.scss'],
})
export class CardPerfilComponent implements OnInit {

  @Input() nombre_completo: string = '';
  @Input() ci: string = '';
  @Input() codigo: string = '';

  constructor() { }

  ngOnInit() {}

}
