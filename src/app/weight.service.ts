import { Observable, of } from 'rxjs';
import { WEIGHTS } from './mock_weights';
import { Injectable } from '@angular/core';
import { WeightEntry } from './weight';

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  weights = WEIGHTS;
  idCounter = WEIGHTS.length;
  constructor() {}

  getWeights(): Observable<WeightEntry[]> {
    return of(this.weights);
  }

  addWeight(weightEntry: WeightEntry): Observable<WeightEntry> {
    this.idCounter++;
    weightEntry.id = this.idCounter;
    this.weights.push(weightEntry);
    return of(weightEntry);
  }

  deleteWeightEntry(weightId): Observable<any> {
    const index = this.weights.map(item => item.id).indexOf(weightId);
    this.weights.splice(index, 1);
    return of(true);
  }

  updateWeightEntry(weightId, weightChanges): Observable<WeightEntry> {
    const weightToUpdate = this.weights.find(item => item.id === weightId);
    weightChanges.forEach((value, key) => {
      weightToUpdate[key] = value;
    });

    return of(weightToUpdate);
  }
}
