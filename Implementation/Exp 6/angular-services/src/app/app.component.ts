import { Component } from '@angular/core';
import { DataServicesService } from './data-services.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: DataServicesService) {}

  title = 'Angular-Services';
  dataServiceData: string = '';

  fetchData() {
    this.dataServiceData = this.dataService.getData();
  }
}
