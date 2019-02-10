import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { WeightService } from '../weight.service';
import { WeightEntry } from '../weight';

@Component({
  selector: 'app-weight-form',
  templateUrl: './weight-form.component.html',
  styleUrls: ['./weight-form.component.scss']
})
export class WeightFormComponent implements OnInit {
  faPlus = faPlus;
  weightEntry: WeightEntry = new WeightEntry();

  constructor(private weightService: WeightService) {}

  save(e: any): void {
    e.preventDefault();

    if (!this.weightEntry.value || !this.weightEntry.date) {
      alert('You need to enter a weight and a date');
      return;
    } else if (this.weightEntry.value <= 0) {
      alert('The weight value needs to be positive');
      return;
    }

    this.weightService.addWeight(this.weightEntry).subscribe(() => {
      e.target.reset();
      this.weightEntry = new WeightEntry();
    });
  }

  ngOnInit() {}
}
