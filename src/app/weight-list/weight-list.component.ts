import { Component, OnInit } from '@angular/core';
import { WEIGHTS } from '../mock_weights';
import { WeightService } from '../weight.service';
// import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-weight-list',
  templateUrl: './weight-list.component.html',
  styleUrls: ['./weight-list.component.scss']
})
export class WeightListComponent implements OnInit {
  public weights;

  constructor(private weightService: WeightService) {}

  getWeights(): void {
    this.weightService
      .getWeights()
      // .pipe(tap(weights => console.log(weights)))
      .subscribe(weights => (this.weights = weights));
  }

  ngOnInit() {
    this.getWeights();
  }
}
