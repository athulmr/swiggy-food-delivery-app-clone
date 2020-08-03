import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { InfoCard } from 'src/app/model/info-card.model';


@Component({
  selector: 'app-top-picks',
  templateUrl: './top-picks.component.html',
  styleUrls: [ './top-picks.component.scss']
})
export class TopPicksComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  topPicks: InfoCard[] = [];

  constructor() { }

  ngOnInit(): void {
    this.topPicks.push({
      imgUrl: "../../../assets/images/toppicks/pic1.jpeg",
      name: 'Lunch Box',
      badge: 'new'
    });
    this.topPicks.push({
      imgUrl: "../../../assets/images/toppicks/tp2.jpeg",
      name: 'Knight Riders',
    });
    this.topPicks.push({
      imgUrl: "../../../assets/images/toppicks/tp3.jpeg",
      name: 'Curry Bowl',
    });
    this.topPicks.push({
      imgUrl: "../../../assets/images/toppicks/tp4.jpeg",
      name: 'Yummy fish',
    });
    this.topPicks.push({
      imgUrl: "../../../assets/images/toppicks/tp5.jpeg",
      name: 'Health fit',
      badge: 'new'
    });
  }

}
