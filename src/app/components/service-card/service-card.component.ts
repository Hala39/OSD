import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('index') index: string = '1';
}
 