import { Injectable } from '@angular/core';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | null = null;

  setUser(user: User) {
    this.currentUser = user;
  }

  getUser(): User | null {
    return this.currentUser;
  }
}
