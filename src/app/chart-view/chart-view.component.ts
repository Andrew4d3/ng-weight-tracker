import { Component, OnInit } from "@angular/core";
import { WEIGHTS } from "../mock_weights";
import * as moment from "moment";
import { faHome } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-chart-view",
  templateUrl: "./chart-view.component.html",
  styleUrls: ["./chart-view.component.scss"]
})
export class ChartViewComponent implements OnInit {
  weights = WEIGHTS; // TODO sort this!
  faHome = faHome;

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: this.weights.map(weight => weight.value), label: "Account A" }
  ];

  chartLabels = this.weights.map(weight =>
    moment(weight.date).format("DD/MM/YYYY")
  );

  onChartClick(event) {
    console.log(event);
  }

  constructor() {}

  ngOnInit() {}
}
