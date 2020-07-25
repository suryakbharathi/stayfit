import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-percentage-box',
  templateUrl: './data-percentage-box.component.html',
  styleUrls: ['./data-percentage-box.component.css']
})
export class DataPercentageBoxComponent implements OnInit {
  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
