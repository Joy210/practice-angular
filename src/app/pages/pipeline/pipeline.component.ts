import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from '../../lib/components/container/container.component';

@Component({
  selector: 'app-pipeline',
  standalone: true,
  imports: [FormsModule, ContainerComponent, CommonModule],
  templateUrl: './pipeline.component.html',
  styleUrl: './pipeline.component.scss',
})
export class PipelineComponent {
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
