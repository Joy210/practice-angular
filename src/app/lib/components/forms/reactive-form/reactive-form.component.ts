import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from '../../container/container.component';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ContainerComponent, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  userObj = {
    firsname: '',
    middlename: '',
    lastname: '',
    email: '',
  };

  userForm: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    middlename: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
  });

  fromSubmit = () => {
    // this.userForm = {
    //   ...this.userForm,
    //   ...formData.value,
    // };
    console.log(this.userForm);
    // return this.userForm;
  };

  // getFormData = () => {
  //   return JSON.stringify(this.userForm)
  //     .replace(' ', '&nbsp;')
  //     .replace('\n', '<br/>');
  // };
}
