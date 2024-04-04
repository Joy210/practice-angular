import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from '../../container/container.component';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ContainerComponent],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss',
})
export class TemplateFormComponent {
  formData: any = {
    firstname: 'Sohanur',
    middlename: '',
    lastname: 'Rahman',
    email: 'joy@email.com',
  };

  fromSubmit = (formData: any) => {
    this.formData = {
      ...this.formData,
      ...formData.value,
    };

    console.log(this.formData);
    return this.formData;
  };

  getFormData = () => {
    return JSON.stringify(this.formData)
      .replace(' ', '&nbsp;')
      .replace('\n', '<br/>');
  };
}
