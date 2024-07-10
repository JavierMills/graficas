import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels : Label [] = [
    // 'Fernanda', 'Javier', 'Dylan', 'Mary', 'Ramiro'
  ];
 
  public doughnutChartData : MultiDataSet = [
    // [350, 450, 100, 130, 150],
  ];

  public doughnutChartType : ChartType = 'doughnut';

  public colors : Color[] = [
    {
      backgroundColor:['#3979ED', '#3BB0F7', '#41CDE0', '#3BF7DA', '#39ED9E']
    }
  ]

  constructor(private user: GraficasService) { }

  ngOnInit(): void {
    this.usuario();
  }

  usuario(){
 
  this.user.getUsuariosRedesSocialesDonaData().subscribe( ({labels, values}) => {
  
    this.doughnutChartLabels = labels;
    this.doughnutChartData = values;
    
  })
}



}
