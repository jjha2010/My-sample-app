import { Component, OnInit } from '@angular/core';
import sampleData from '../../assets/data.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  Image:any = sampleData;
  ngOnInit(): void {
  }

}
