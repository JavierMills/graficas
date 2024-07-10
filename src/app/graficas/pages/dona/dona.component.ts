import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Colors, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent  {

  public doughnutChartLabels : Label [] = ['Fernanda', 'Javier', 'Dylan', 'Mary', 'Ramiro'];
 
  public doughnutChartData : MultiDataSet = [
    [350, 450, 100, 130, 150],
    // [50, 150, 120],
    // [250, 130, 70]
  ];

  public doughnutChartType : ChartType = 'doughnut';

  public colors : Colors[] = [
    {
      backgroundColor:['#3979ED', '#3BB0F7', '#41CDE0', '#3BF7DA', '#39ED9E']
    }
  ]

}
