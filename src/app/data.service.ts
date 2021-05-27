import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listData = [];

  getData(value){
   this.listData.push(value)
  }

  updataData(){
    return this.listData;
  }
}