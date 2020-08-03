import { Component, OnInit, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-info-card-small',
  templateUrl: './info-card-small.component.html',
  styleUrls: ['./info-card-small.component.scss']
})
export class InfoCardSmallComponent implements OnInit {

  @Input() name: string;
  @Input() imgUrl?: string;
  @Input() badge?: string;
  @Input() time?: string;
  @Input() rounded?: boolean;

  constructor(private renderer :Renderer2) { }

  ngOnInit(): void {
    console.log(this.name,this.time,typeof this.badge, '-');
  }

  isDefined(val): boolean { return typeof val !== 'undefined'; };

}
