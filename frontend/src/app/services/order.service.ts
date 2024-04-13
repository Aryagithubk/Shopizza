import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from '../shared/models/Order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  create(order: Order): Observable<Order> {
    // Dummy implementation, replace with your logic
    return of(order);
  }

  getNewOrderForCurrentUser(): Observable<Order> {
    // Dummy implementation, replace with your logic
    return of(new Order());
  }

  pay(order: Order): Observable<string> {
    // Dummy implementation, replace with your logic
    return of('Payment successful');
  }

  trackOrderById(id: number): Observable<Order> {
    // Dummy implementation, replace with your logic
    return of(new Order());
  }
}
