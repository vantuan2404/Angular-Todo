import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit, AfterViewInit{
  dataRender = [];

  constructor(private _service: DataService){}

  ngOnInit():void{
  }

  ngAfterViewInit():void{
    this.dataRender = this._service.updataData();
  }

  editing($event){
  }

  removing($event){
  }

}
