import { Component, OnInit, Input } from '@angular/core';

import { RestaurantInfo } from '../../../model/restaurant.model'

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.scss']
})
export class RestaurantInfoComponent implements OnInit {

  restaurantInfos: RestaurantInfo;
  @Input() restaurantInfo: RestaurantInfo;

  constructor() { }

  ngOnInit(): void {
    this.restaurantInfos ={
      name: 'the bowl company',
      address: 'sample address sample address sample address',
      rating: '4.2',
      costForTwo: 300,
      deliveryTime: 30,
      discount: 10
    };
  }

}
