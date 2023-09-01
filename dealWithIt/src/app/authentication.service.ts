import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../environments/environment.dev';
import { Rep } from './Rep';
import { Router } from '@angular/router';


const REP_KEY = 'Rep';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  returnUrl = '';
  private repSubject = new BehaviorSubject<Rep>(this.getRepFromLocalStorage());
  public repObservable:Observable<Rep>;

  constructor(private http:HttpClient, private router: Router) {
    this.repObservable = this.repSubject.asObservable();
  }

  login(repLogin: Rep):Observable<Rep> {
    return this.http.post<Rep>(environment.REP_BASE_URL + environment.REP.REP_LOGIN, repLogin).pipe(
      tap({
        next: (rep) => {
          this.setRepToLocalStorage(rep);
          this.repSubject.next(rep);
        },
        error: (errorResponse) => {
          console.log(errorResponse);
        }
      })
    );
  }

  register(repRegister:Rep): Observable<Rep>{
    return this.http.post<Rep>(environment.REP_BASE_URL + environment.REP.REP_REGISTER, repRegister).pipe(
      tap({
        next: (rep) => {
          this.setRepToLocalStorage(rep);
          this.repSubject.next(rep);
        },
        error: (errorResponse) => {
          console.log(errorResponse);
        }
      })
    )
  }

  getUsername(): string {
    const rep = this.getRepFromLocalStorage();
    return rep ? rep.username : '';
  }

  logout(){
    this.repSubject.next(new Rep());
    localStorage.removeItem(REP_KEY);
    this.router.navigateByUrl(this.returnUrl);
  }


  private setRepToLocalStorage(rep: Rep) {
    localStorage.setItem(REP_KEY, JSON.stringify(rep));
  }

  private getRepFromLocalStorage():Rep {
    const repJson = localStorage.getItem(REP_KEY);
    if(repJson) return JSON.parse(repJson) as Rep;
    return new Rep();
  }
}
