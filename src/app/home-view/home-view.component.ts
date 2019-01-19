import { Component, OnInit } from "@angular/core";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-home-view",
  templateUrl: "./home-view.component.html",
  styleUrls: ["./home-view.component.scss"]
})
export class HomeViewComponent implements OnInit {
  faChartLine = faChartLine;

  constructor() {}

  ngOnInit() {}
}
