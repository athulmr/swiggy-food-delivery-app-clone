import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faSearch, faShoppingBag, faUserAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss']

})
export class NavbarComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faSearch = faSearch;
  faShoppingBag = faShoppingBag;
  faUserAlt = faUserAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
