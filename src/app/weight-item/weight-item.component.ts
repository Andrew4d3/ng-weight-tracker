import { Component, OnInit, Input } from "@angular/core";
import { WeightEntry } from "../weight";
import * as moment from "moment";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-weight-item",
  templateUrl: "./weight-item.component.html",
  styleUrls: ["./weight-item.component.scss"]
})
export class WeightItemComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;

  @Input()
  weight: WeightEntry;

  constructor() {}

  ngOnInit() {}

  formatDate(date) {
    return moment(date).format("DD/MM/YYYY");
  }
}
