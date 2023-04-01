import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string = 'card';
  @Input() description: string = 'empty desc';
  @Input() type: "small" | "big" = "small";
  @Input() contrast: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
