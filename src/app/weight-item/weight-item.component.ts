import { Component, OnInit, Input } from '@angular/core';
import { WeightEntry } from '../weight';
import * as moment from 'moment';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { WeightService } from '../weight.service';

@Component({
  selector: 'app-weight-item',
  templateUrl: './weight-item.component.html',
  styleUrls: ['./weight-item.component.scss']
})
export class WeightItemComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  showEdit = false;
  myValue = 1;
  weightChanges = new Map();

  @Input()
  weight: WeightEntry;

  constructor(private weightService: WeightService) {}

  ngOnInit() {}

  formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }

  toggleEdit() {
    this.showEdit = !this.showEdit;
  }

  delete() {
    this.weightService.deleteWeightEntry(this.weight.id);
  }

  prepareWeightChanges(newValue, key) {
    this.weightChanges.set(key, newValue);
  }

  updateWeight() {
    if (!this.weightChanges.size) {
      this.showEdit = false;
      return;
    }

    this.weightService
      .updateWeightEntry(this.weight.id, this.weightChanges)
      .subscribe(() => {
        this.showEdit = false;
      });
  }
}
