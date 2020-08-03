import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../model/coupons.model'
import { faPercent } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: [ './coupons.component.scss']

})
export class CouponsComponent implements OnInit {

  faPercentage = faPercent;

  coupons: Coupon[] = [];

  constructor() { }

  ngOnInit(): void {
    this.coupons.push({
      name: 'Upto 150 off',
      code: 'jumbo'
    });
    this.coupons.push({
      name: 'Upto 200 off',
      code: 'party'
    });
    this.coupons.push({
      name: 'CashBack Flat 25',
    });
  }

}
