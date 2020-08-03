import { Component, OnInit } from '@angular/core';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { RestaurantInfo } from 'src/app/model/restaurant.model';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: [ './spotlight.component.scss']
})
export class SpotlightComponent implements OnInit {

  faStoreAlt = faStoreAlt;

  restaurantInfos: RestaurantInfo[] = [];
  spotlight: []

  constructor() { }

  ngOnInit(): void {

    this.restaurantInfos.push({
      imgUrl: '../../assets/images/restaurants/rest1.jpeg',
      name: 'the bowl company',
      address: 'sample address sample address sample address',
      rating: '4.2',
      costForTwo: 300,
      deliveryTime: 30,
      discount: 10
    });
    this.restaurantInfos.push({
      imgUrl: '../../assets/images/restaurants/rest5.jpeg',
      name: 'Knight Riders',
      address: 'sample address sample address sample address',
      rating: '4.7',
      costForTwo: 300,
      deliveryTime: 30,
      discount: 10
    });
    this.restaurantInfos.push({
      imgUrl: '../../assets/images/restaurants/rest2.jpeg',
      name: 'Big Bang Waffles',
      address: 'sample address sample address sample address',
      rating: '4.9',
      costForTwo: 400,
      deliveryTime: 30,
      discount: 10
    });
    this.restaurantInfos.push({
      imgUrl: '../../assets/images/restaurants/rest3.jpeg',
      name: 'Curry Bowl',
      address: 'sample address sample address sample address',
      rating: '4.2',
      costForTwo: 300,
      deliveryTime: 30,
      discount: 10
    });
    this.restaurantInfos.push({
      imgUrl: '../../assets/images/restaurants/rest4.jpeg',
      name: 'Kerala Special',
      address: 'sample address sample address sample address',
      rating: '4.2',
      costForTwo: 300,
      deliveryTime: 30,
      discount: 10
    });

    // for (let i = 0; i < this.restaurantInfos.length; i++) {
    //   const element = this.restaurantInfos[i];

    // }
    // this.restaurantInfos

  }

}
