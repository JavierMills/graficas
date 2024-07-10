import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels : Label [] = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
 
  public barChartData : ChartDataSets[] =[
    { data: [65, 59, 80, 81, 56, 57, 40], label: 'PlayStation 5', backgroundColor:'blue', hoverBackgroundColor: 'lime'},
    { data: [20, 40, 48, 19, 86, 27, 90], label: 'Xbox Series X',  backgroundColor:'yellow', hoverBackgroundColor: 'lime'},
    { data: [30, 24, 58, 12, 82, 20, 60], label: 'Nintendo,', backgroundColor:'red', hoverBackgroundColor: 'lime'}
  ]


  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    this.barChartData[0].data = [
       Math.round( Math.random() * 100),
       Math.round( Math.random() * 100),
       Math.round( Math.random() * 100),
       Math.round( Math.random() * 100),
       Math.round( Math.random() * 100),
       Math.round( Math.random() * 100),
       Math.round( Math.random() * 100),
    
    ];
    this.barChartData[1].data = [
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
      Math.round( Math.random() * 100),
   
   ];
   this.barChartData[2].data = [
    Math.round( Math.random() * 100),
    Math.round( Math.random() * 100),
    Math.round( Math.random() * 100),
    Math.round( Math.random() * 100),
    Math.round( Math.random() * 100),
    Math.round( Math.random() * 100),
    Math.round( Math.random() * 100),
 
 ];
  }

}
