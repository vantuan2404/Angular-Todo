import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Face } from '../models/face.models';

@Component({
  selector: 'data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent  {
  @Input() value: Face;

  constructor(private readonly _service: DataService){}

  changeInput($event){
    this._service.getData($event.target.value)
  }
}
