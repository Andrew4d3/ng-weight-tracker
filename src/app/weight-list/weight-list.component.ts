import { Component, OnInit } from '@angular/core';
import { WeightService } from '../weight.service';

@Component({
  selector: 'app-weight-list',
  templateUrl: './weight-list.component.html',
  styleUrls: ['./weight-list.component.scss']
})
export class WeightListComponent implements OnInit {
  public weights = [];

  constructor(private weightService: WeightService) {}

  getWeights(): void {
    this.weightService
      .getWeights()
      .subscribe(weights => (this.weights = weights));
  }

  ngOnInit() {
    this.getWeights();
  }
}
