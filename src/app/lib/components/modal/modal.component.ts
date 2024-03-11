import { Component } from '@angular/core';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  constructor(public generalService: GeneralService) {}
}
