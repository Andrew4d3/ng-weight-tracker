import { Component, OnInit } from '@angular/core';
import { WEIGHTS } from '../mock_weights';
import { WeightService } from '../weight.service';
import * as moment from 'moment';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.scss']
})
export class ChartViewComponent implements OnInit {
  weights = [];
  faHome = faHome;
  show = false;

  chartData = [];

  chartLabels = [];

  chartOptions = {
    responsive: true
  };

  constructor(private weightService: WeightService) {
    this.weightService.getWeights().subscribe(weights => {
      this.weights = weights.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      });

      this.chartData = [
        { data: this.weights.map(weight => weight.value), label: 'Account A' }
      ];

      this.chartLabels = this.weights.map(weight =>
        moment(weight.date).format('DD/MM/YYYY')
      );

      this.show = true;
    });
  }

  onChartClick(event) {
    console.log(event);
  }

  ngOnInit() {}
}
