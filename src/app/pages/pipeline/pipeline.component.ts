import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from '../../lib/components/container/container.component';
import { CommonModule } from '@angular/common';

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
    lastname: 'Rahman',
    email: 'joy@email.com',
  };

  fromSubmit = (formData: any) => {
    console.log(formData);
  };
}
