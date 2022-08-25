import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('title') title: string = '';
  @Input('text') text: string = '';
  @Input('anchorContent') anchorContent: string = '';
  @Input('anchorTarget') anchorTarget: string = '';
  @Input('color') color: string = '';

}
