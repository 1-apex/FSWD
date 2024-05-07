import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor() {}
  
  getData() {
    return "This is the text from DataService services";
  }
}
