import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  showModal = false;
  showModalFooter = true;
  modalHeader: string = 'Modal Header';
  modalContent: any;

  constructor() {}
}
