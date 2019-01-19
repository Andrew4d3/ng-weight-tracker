import { Component, OnInit } from "@angular/core";
import { WEIGHTS } from "../mock_weights";

@Component({
  selector: "app-weight-list",
  templateUrl: "./weight-list.component.html",
  styleUrls: ["./weight-list.component.scss"]
})
export class WeightListComponent implements OnInit {
  weights = WEIGHTS;

  constructor() {}

  ngOnInit() {}
}
