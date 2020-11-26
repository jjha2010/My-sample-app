import { Component, OnInit } from '@angular/core';
import sampleData from '../../assets/data.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  viewDetails: boolean;
  selectedImage: any;
 
  constructor() { }
  Image:any = sampleData;
  ngOnInit(): void {
  }

  setSelectedImage(img:any){
    this.viewDetails=true;
    this.selectedImage=img;

    //var txt="";
    //txt += "Name: " +this.selectedImage.Name;
  }

}
