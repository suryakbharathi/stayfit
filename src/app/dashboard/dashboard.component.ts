import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bodyData: any = [];
  routineData: any = [];
  trainerData: any = [];
  legendsData: any = [];
  xData: any = [];
  constructor() { }

  ngOnInit(): void {
    this.bodyData = [ 
      {
        title : 'Heart',
        titleColor : '#f06768',
        value : 119,
        type : 'bpm',
        icon : 'fas fa-heart',
        iconColor : '#c2c2c2',
        valuePercentage: '82%' ,
        percentageColor: '#62bd38'
      },
      {
        title : 'Running',
        titleColor : '#76ce4d',
        value : 3043,
        type : 'm',
        icon : 'fas fa-running',
        iconColor : '#c2c2c2',
        valuePercentage: '39%',
        percentageColor: '#51beaa'
      },
      {
        title : 'Calories',
        titleColor : '#f7a941',
        value : 3043,
        type : 'kcal',
        icon : 'fas fa-fire',
        iconColor : '#c2c2c2',
        valuePercentage: '18%',
        percentageColor: '#a2a6b1'
      }
    ];
    this.routineData = [
      {
        barColor: '#fccb40',
        head: 'Aerobics',
        subHead: 'Violena Aerobic club',
        timeOne: '08:30',
        timeTwo: '09:30'
      },
      {
        barColor: '#384dc0',
        head: 'Pilates',
        subHead: 'Lady Fit',
        timeOne: '09:30',
        timeTwo: '10:30'
      },
      {
        barColor: '#f05e5e',
        head: 'Box',
        subHead: 'Sport Club Matrix',
        timeOne: '12:00',
        timeTwo: '13:30'
    }
    ];
    this.trainerData = [
      {
        name : 'Brandon Jones',
        area : 'Fitness',
        rating : 3.5,
        active : true
      },
      {
        name : 'Lee Murphy',
        area : 'Pole dance',
        rating : 3.5,
        active : false
      },
      {
        name : 'Ted Nguyen',
        area : 'Crossfit',
        rating : 3.5,
        active : false
      },
      {
        name : 'Marvin Wilson',
        area : 'Fitness',
        rating : 3.5,
        active : false
      }
    ];
    this.legendsData = [
      {
        name: 'Pilates',
        color: '#384dc0'
      },
      {
        name: 'Aerobics',
        color: '#fccb40'
      },
      {
        name: 'Box',
        color: '#f05e5e'
      }
    ];
    this.xData = [
      {
        value : 10,
        bars: [
          {
            'background' : '#f05e5e',
            'height': '15%',
          },
          {
            'background' : '#f1f1f1',
            'height': '70%',
          }
        ]
      },
      {
        value : 11,
        bars: [
          {
            'background' : '#384dc0',
            'height': '50%',
          },
          {
            'background' : '#f05e5e',
            'height': '15%',
          },
          {
            'background' : '#f1f1f1',
            'height': '20%',
          }
        ]
      },
      {
        value : 12,
        bars: [
          {
            'background' : '#384dc0',
            'height': '60%',
          },
          {
            'background' : '#f05e5e',
            'height': '15%',
          },
          {
            'background' : '#f1f1f1',
            'height': '10%',
          }
        ]
      },
      {
        value : 13,
        bars: [
          {
            'background' : '#384dc0',
            'height': '30%',
          },
          {
            'background' : '#f1f1f1',
            'height': '55%',
          }
        ]
      },
      {
        value : 14,
        bars: [
          {
            'background' : '#384dc0',
            'height': '50%',
          },
          {
            'background' : '#f05e5e',
            'height': '10%',
          },
          {
            'background' : '#f1f1f1',
            'height': '25%',
          }
        ]
      },
      {
        value : 15,
        bars: [
          {
            'background' : '#384dc0',
            'height': '50%',
          },
          {
            'background' : '#f1f1f1',
            'height': '35%',
          }
        ]
      },
      {
        value : 16,
        bars: [
          {
            'background' : '#384dc0',
            'height': '28%',
          },
          {
            'background' : '#fccb40',
            'height': '10%',
          },
          {
            'background' : '#384dc0',
            'height': '5%',
          },
          {
            'background' : '#f1f1f1',
            'height': '40%',
          }
        ]
      },
      {
        value : 17,
        bars: [
          {
            'background' : '#384dc0',
            'height': '50%',
          },
          {
            'background' : '#f05e5e',
            'height': '10%',
          },
          {
            'background' : '#f1f1f1',
            'height': '25%',
          }
        ]
      },
      {
        value : 18,
        bars: [
          {
            'background' : '#384dc0',
            'height': '40%',
          },
          {
            'background' : '#f1f1f1',
            'height': '45%',
          }
        ]
      },
      {
        value : 19,
        bars: [
          {
            'background' : '#384dc0',
            'height': '28%',
          },
          {
            'background' : '#fccb40',
            'height': '10%',
          },
          {
            'background' : '#384dc0',
            'height': '5%',
          },
          {
            'background' : '#f1f1f1',
            'height': '40%',
          }
        ]
      },
      {
        value : 20,
        bars: [
          {
            'background' : '#384dc0',
            'height': '50%',
          },
          {
            'background' : '#f05e5e',
            'height': '10%',
          },
          {
            'background' : '#f1f1f1',
            'height': '25%',
          }
        ]
      },
      {
        value : 21,
        bars: [
          {
            'background' : '#384dc0',
            'height': '50%',
          },
          {
            'background' : '#f1f1f1',
            'height': '35%',
          }
        ]
      },
      {
        value : 22,
        bars: [
          {
            'background' : '#384dc0',
            'height': '50%',
          },
          {
            'background' : '#f05e5e',
            'height': '10%',
          },
          {
            'background' : '#f1f1f1',
            'height': '25%',
          }
        ]
      },
      {
        value : 23,
        bars: [
          {
            'background' : '#384dc0',
            'height': '50%',
          },
          {
            'background' : '#f1f1f1',
            'height': '35%',
          }
        ]
      },
    ]
  }

}
