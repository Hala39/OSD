import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trust',
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.scss']
})
export class TrustComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reasons: string[] = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere ut ullam deleniti repellendus tenetur distinctio odio, perferendis incidunt, unde fugiat vel ratione recusandae autem.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere ut ullam deleniti repellendus tenetur distinctio odio, perferendis incidunt, unde fugiat vel ratione recusandae autem.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere ut ullam deleniti repellendus tenetur distinctio odio, perferendis incidunt, unde fugiat vel ratione recusandae autem.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere ut ullam deleniti repellendus tenetur distinctio odio, perferendis incidunt, unde fugiat vel ratione recusandae autem.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere ut ullam deleniti repellendus tenetur distinctio odio, perferendis incidunt, unde fugiat vel ratione recusandae autem.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere ut ullam deleniti repellendus tenetur distinctio odio, perferendis incidunt, unde fugiat vel ratione recusandae autem.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere ut ullam deleniti repellendus tenetur distinctio odio, perferendis incidunt, unde fugiat vel ratione recusandae autem.',

  ]
}
