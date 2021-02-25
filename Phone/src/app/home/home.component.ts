import { Component, OnInit } from '@angular/core';
import { PhoneRecordsService } from '../phone-records.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // id = 1
  // phone: any = []
  // isPhoneExist = false;
  // number
  // moreThanOne = false;
  constructor(
    private service: PhoneRecordsService
  ) { }

  ngOnInit() {
    this.phoneExist();
    this.isMultiple();
  }
  save() {
    this.service.phone.push({ 'id': this.service.id++, 'phone': this.service.number })
    this.ngOnInit();
    for (let i = 0; i < this.service.phone.length; i++) {
      console.log("PhoneNumber " + (i + 1) + ':' + this.service.phone[i].phone);
    }
  }
  deleteNumber(arg) {
    this.service.phone = this.service.phone.filter(item => item.id !== arg.id);
    console.log(this.service.phone.length)
    this.isMultiple();
  }
  phoneExist() {
    if (this.service.phone.length > 0) {
      this.service.isPhoneExist = true;
    }
    return false;
  }
  isMultiple() {
    if (this.service.phone.length > 1) {
      this.service.moreThanOne = true;
    }
    else {
      this.service.moreThanOne = false;
    }
  }
}
