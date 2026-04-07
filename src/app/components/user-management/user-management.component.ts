import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;
  showForm = false;
  isEditMode = false;
  isLoadingData = false;

  constructor(
    private userService: UserService, 
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.userForm = this.fb.group({
      userId: [''],
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      password: ['', Validators.required],
      country: [''],
      address: ['']
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  openAddForm(): void {
    this.isEditMode = false;
    this.userForm.reset();
    this.showForm = true;
    this.isLoadingData = true;

    // Fetch random user data
    this.http.get<any>('https://randomuser.me/api/').subscribe({
      next: (response) => {
        const randomUser = response.results[0];
        
        // Patch the form with random data
        this.userForm.patchValue({
          userName: randomUser.login.username,
          firstName: randomUser.name.first,
          lastName: randomUser.name.last,
          email: randomUser.email,
          phoneNumber: randomUser.phone,
          password: randomUser.login.password,
          country: randomUser.location.country,
          address: `${randomUser.location.street.number} ${randomUser.location.street.name}, ${randomUser.location.city}`
        });
        
        this.isLoadingData = false;
      },
      error: (err) => {
        console.error('Error fetching random user data', err);
        this.isLoadingData = false;
      }
    });
  }

  editUser(user: User): void {
    this.isEditMode = true;
    this.userForm.patchValue(user);
    this.showForm = true;
  }

  cancelForm(): void {
    this.showForm = false;
    this.userForm.reset();
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const userData: User = this.userForm.value;

    if (this.isEditMode) {
      this.userService.editUser(userData).subscribe(() => {
        this.loadUsers();
        this.cancelForm();
      });
    } else {
      this.userService.createNewUser(userData).subscribe(() => {
        this.loadUsers();
        this.cancelForm();
      });
    }
  }

  deleteUser(userId?: string): void {
    if (!userId) return;

    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe((success) => {
        if (success) {
          this.loadUsers();
        }
      });
    }
  }
}
