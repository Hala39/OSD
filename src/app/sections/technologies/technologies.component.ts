import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 

  @ViewChild('technosRef') technosUlRef!: ElementRef<HTMLUListElement>;

  goRight() {
    const elementWidth = 25 * this.technosUlRef.nativeElement.offsetWidth / 100;
    if (this.technosUlRef.nativeElement.scrollLeft + elementWidth < elementWidth * 4)
      this.technosUlRef.nativeElement.scrollLeft += elementWidth;
    else return;
  }

  goLeft() {
    const elementWidth = 25 * this.technosUlRef.nativeElement.offsetWidth / 100;
    this.technosUlRef.nativeElement.scrollLeft -= elementWidth;
  }

  technos: {name: string, logo: string}[] = [
    {
      name: 'Python',
      logo: 'assets/images/technologies/python.png'
    },
    {
      name: 'Net',
      logo: 'assets/images/technologies/python.png'
    },{
      name: 'WordPress',
      logo: 'assets/images/technologies/python.png'
    },{
      name: 'Python',
      logo: 'assets/images/technologies/python.png'
    },{
      name: 'Python',
      logo: 'assets/images/technologies/python.png'
    },{
      name: 'Python',
      logo: 'assets/images/technologies/python.png'
    },{
      name: 'Python',
      logo: 'assets/images/technologies/python.png'
    },{
      name: 'Python',
      logo: 'assets/images/technologies/python.png'
    },{
      name: 'Python',
      logo: 'assets/images/technologies/python.png'
    },{
      name: 'Python',
      logo: 'assets/images/technologies/python.png'
    },{
      name: 'Python',
      logo: 'assets/images/technologies/python.png'
    }
  ]

}
