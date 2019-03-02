import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   h1Style: boolean = false;
  constructor(private data: DataService) { }

  ngOnInit() {
  }
firstClick() {
    //console.log('clicked ya guys');
	//alert("Selamat pagi Indonesia")
	this.h1Style=true
  this.data.myMethod()
  console.log('clicked ya guys');
	alert("hai semua")
  }
}
