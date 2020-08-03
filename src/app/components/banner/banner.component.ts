import { Component, OnInit } from '@angular/core';
import { InfoCard } from '../../model/info-card.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  smallBanners: InfoCard [] = [];

  constructor() {}

  ngOnInit(): void {
    this.smallBanners.push({
      imgUrl: "../../../assets/images/mini-ad/delivery.jpeg",
      name: 'anything delivered'
    });
    this.smallBanners.push({
      imgUrl: "../../../assets/images/mini-ad/healthy.webp",
      name: 'health hub',
      badge: 'new'
    });
    this.smallBanners.push({
      imgUrl: "../../../assets/images/mini-ad/fruitsnveg.jpg",
      name: 'fruits and vegitables',
    });
    this.smallBanners.push({
      imgUrl: "../../../assets/images/mini-ad/wellness.jpeg",
      name: 'wellness essentials',
    });
    this.smallBanners.push({
      imgUrl: "../../../assets/images/mini-ad/healthy.jpeg",
      name: 'fruit bowl',
      badge: 'new'
    });
  }
}
