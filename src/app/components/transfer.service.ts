import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transfer } from './transfer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private readonly API =  'http://localhost:3000/transferencias'
  constructor(private http: HttpClient) { }

  print(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(this.API);
  }

  newTransfer(transfer: Transfer): Observable<Transfer>{
    return this.http.post<Transfer>(this.API, transfer)
  }

}
