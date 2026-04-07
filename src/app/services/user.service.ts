import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Initializing a private array to act as our "Database"
  private users: User[] = [
    {
      id: 1,
      userId: this.generateGuid(),
      userName: 'admin',
      password: 'password123',
      email: 'admin@example.com',
      firstName: 'Admin',
      lastName: 'User',
      country: 'USA',
      phoneNumber: '555-0100',
      address: '123 Main St'
    }
  ];

  private nextId = 2;

  constructor() { }

  // Helper to generate a fake Guid
  private generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  getUserPresence(userName?: string, password?: string): Observable<boolean> {
    const exists = this.users.some(
      (u) => u.userName === userName && u.password === password
    );
    return of(exists);
  }

  createNewUser(user: User): Observable<string> {
    const newGuid = this.generateGuid();
    const newUser = { ...user, id: this.nextId++, userId: newGuid };
    this.users.push(newUser);
    return of(newGuid);
  }

  getAllUsers(): Observable<User[]> {
    return of([...this.users]);
  }

  editUser(user: User): Observable<boolean> {
    const index = this.users.findIndex((u) => u.userId === user.userId);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...user };
      return of(true);
    }
    return of(false);
  }

  deleteUser(userId: string): Observable<boolean> {
    const index = this.users.findIndex((u) => u.userId === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
