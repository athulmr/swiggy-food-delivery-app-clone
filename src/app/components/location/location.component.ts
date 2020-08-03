import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPercent } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: [ './location.component.scss']

})
export class LocationComponent implements OnInit {
  mapMarkerAlt = faMapMarkerAlt;
  faPercent = faPercent;
  constructor() { }

  ngOnInit(): void {
  }

}
