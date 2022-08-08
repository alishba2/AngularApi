import { Injectable } from '@angular/core';
import { HttpClient ,HttpRequest} from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http:HttpClient) { }
  getEmployees() :Observable<IEmployee[]>{
  return this.http.get<IEmployee[]>('https://jsonplaceholder.typicode.com/posts');
}
}
