import { Component, OnInit } from "@angular/core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-weight-form",
  templateUrl: "./weight-form.component.html",
  styleUrls: ["./weight-form.component.scss"]
})
export class WeightFormComponent implements OnInit {
  faPlus = faPlus;
  constructor() {}

  ngOnInit() {}
}
