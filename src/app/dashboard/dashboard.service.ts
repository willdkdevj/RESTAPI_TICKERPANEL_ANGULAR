import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'http://localhost:8080/tickers-panel/api/v1';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    return this.http.get<Stock[]>(`${this.baseUrl}/stocks`).toPromise();
  }
}
