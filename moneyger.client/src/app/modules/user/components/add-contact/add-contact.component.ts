import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewContactRequest } from '../../../../interfaces/new-contact-request';
import { ValidationError } from '../../../../interfaces/validation-error';
import { Title } from '@angular/platform-browser';
import { CompanyService } from '../../../../shared/company.service';
import { AuthService } from '../../../../shared/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ContactService } from '../../../../shared/contact.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink,CommonModule]
})
export class AddContactComponent implements OnInit {
  @Output() contactAdded = new EventEmitter<void>();
  editProfileForm!: FormGroup;
  newContact: NewContactRequest = {
    name: '',
    phoneNumber: '',
    email: '',
    facebook: '',
    twitter: '',
    instagram: '',
    companyName: ''
  };
  errors: ValidationError[] = [];

  constructor(
    private fb: FormBuilder,
    private titleService: Title,
    private contactService: ContactService,
    private authService: AuthService,
    public router: Router,
    public dialogRef: MatDialogRef<AddContactComponent>
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Add Contact');
    this.editProfileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: [''],
      email: [''],
      facebook: [''],
      companyName: ['', Validators.required],
      twitter: [''],
      instagram: ['']
    });

    this.editProfileForm.valueChanges.subscribe(() => {
      this.updateFullName();
    });
  }

  updateFullName() {
    const firstName = this.editProfileForm.get('firstName')?.value || '';
    const lastName = this.editProfileForm.get('lastName')?.value || '';
    this.newContact.name = `${firstName} ${lastName}`;
  }

  addContact() {
    if (this.editProfileForm.valid) {
      this.newContact = { ...this.newContact, ...this.editProfileForm.value };
      this.contactService.addContact(this.newContact).subscribe({
        next: (response) => {
          this.router.navigate(['/user/contacts']);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message);
        },
        complete: () => {this.dialogRef.close(),
          this.contactAdded.emit()}
      });
    } else {
      this.editProfileForm.markAllAsTouched();
    }
  }

  Cancel() {
    this.dialogRef.close();
  }
}
