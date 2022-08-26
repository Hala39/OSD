import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  steps: {title: string, content: string, open?: boolean }[] = [
    {
      title: 'contact',
      content: 'you tell us your need',
    },
    {
      title: 'Investigation',
      content: 'you tell us your need',
    },
    {
      title: 'selection',
      content: 'you tell us your need',
    },
    {
      title: 'quotation',
      content: 'you tell us your need',
    },
    {
      title: 'agreement',
      content: 'you tell us your need',
    },
    {
      title: 'action',
      content: 'you tell us your need',
    },
    {
      title: 'support',
      content: 'you tell us your need',
    }
  ]

  toggleText($event: any, stepIndex: number) {
    this.steps[stepIndex].open ? this.steps[stepIndex].open = false : this.steps[stepIndex].open = true;
  }
}
