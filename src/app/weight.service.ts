import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WEIGHTS } from './mock_weights';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { WeightEntry } from './weight';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  weights = WEIGHTS;
  idCounter = WEIGHTS.length;
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getWeights(): Observable<WeightEntry[]> {
    return this.http.get<WeightEntry[]>(`${this.apiUrl}/weight`).pipe(
      map(items => {
        this.weights = items;
        return this.weights;
      })
    );
  }

  addWeight(weightEntry: WeightEntry): Observable<WeightEntry> {
    this.idCounter++;
    weightEntry.id = this.idCounter;

    return this.http
      .post<WeightEntry>(`${this.apiUrl}/weight`, weightEntry, httpOptions)
      .pipe(
        map(response => {
          this.weights.push(response);
          return response;
        })
      );
  }

  deleteWeightEntry(weightId): Observable<any> {
    const index = this.weights.map(item => item.id).indexOf(weightId);

    return this.http
      .delete<boolean>(`${this.apiUrl}/weight/${weightId}`, httpOptions)
      .pipe(
        map(() => {
          this.weights.splice(index, 1);
          return true;
        })
      );
  }

  updateWeightEntry(weightId, weightChanges): Observable<WeightEntry> {
    // const weightToUpdate = this.weights.find(item => item.id === weightId);
    const payload = {};
    weightChanges.forEach((value, key) => {
      payload[key] = value;
    });

    return this.http
      .put<WeightEntry>(
        `${this.apiUrl}/weight/${weightId}`,
        payload,
        httpOptions
      )
      .pipe(
        map(response => {
          const index = this.weights.map(item => item.id).indexOf(weightId);
          this.weights[index] = response;
          return response;
        })
      );
  }
}
