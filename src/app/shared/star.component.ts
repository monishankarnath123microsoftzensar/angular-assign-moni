import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
@Input() rating:number=4
@Output() notify:EventEmitter<string> = new EventEmitter<string>()
starWidth:number;
  constructor() { }

  whenOnClick():void{
    //console.log(`the rating ${this.rating} was clicked`)
    this.notify.emit(`Clicked!! ${this.rating}`)
  }

  ngOnChanges(): void {
    this.starWidth=this.rating * 75/5;
  }

}
