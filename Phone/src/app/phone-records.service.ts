import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneRecordsService {
  id = 1
  phone: any = []
  isPhoneExist = false;
  number
  moreThanOne = false;
  constructor() { }
}
