import { Component, OnInit } from '@angular/core';
import { IEntry } from './entries';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle = "Your Weight Entries"
  constructor(private _homeService : HomeService) { }

  entries:IEntry[]
  
  ngOnInit(): void {
    this.entries = this._homeService.getEntry()
  }

}
