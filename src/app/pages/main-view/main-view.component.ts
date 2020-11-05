import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  // Från våra "models", Först skapar vi ett boardfält, som kommer innehålla alla columns
  board: Board = new Board('Test Board', [
    new Column('Ideér', [
      "Ta över världen ",
      "Random idé #2",
      "DRAG and DROP me sir, I am a tasklist :)",
      "Nej, du kan inte skapa egna tasks, använd Trello istället "
    ]),
    new Column('Research', [
      "How to build Skynet"
    ]),
    new Column('Att göra', [
      'Ta tag i mitt liv',
    ]),
    new Column('Klart', [
      'Räkningar',
      'Plugg'
    ])
  ]);

  ngOnInit(): void {
  }
 // Från CDK/Drag-Drop
  // todo = [
  //   'Ta över världen',
  //   'Random idé  #2',
  //   'Drag and Drop me, Sir!, I am a tasklist ffs'
  // ];

  // done = [
  //   'How to build Skynet ?'
  // ];
  // Frå
  // Den här koden flyttar alla föremål inuti arrayen om previouscontainer är lika med nuvarande container vi flyttar in allting i 
  drop(event: CdkDragDrop<string[]>) { 
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else { // Om item har flyttats från en container så körs transferArrayMethod och kör alla de här parametrarna
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


}
