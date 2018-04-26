import {
  Component,
  OnInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-navi-bar',
  templateUrl: './navi-bar.component.html',
  styleUrls: ['./navi-bar.component.css'],
  animations: [
    trigger('hover', [
      state('active', style({
        backgroundColor: '#00F6ED',
        color: '#0F1108',
      })),
      state('inactive', style({
        backgroundColor: '#0F1108',
      })),
      transition('inactive <=> active', animate('100ms')),
    ])
  ],
})
export class NaviBarComponent implements OnInit {
  // hover
  hoverState1 = 'inactive';
  hoverState2 = 'inactive';
  hoverState3 = 'inactive';
  hoverState4 = 'inactive';
  // hover functions
  mouseEnter1() {
    this.hoverState1 = 'active';
  }
  mouseLeave1() {
    this.hoverState1 = 'inactive';
  }
  mouseEnter2() {
    this.hoverState2 = 'active';
  }
  mouseLeave2() {
    this.hoverState2 = 'inactive';
  }
  mouseEnter3() {
    this.hoverState3 = 'active';
  }
  mouseLeave3() {
    this.hoverState3 = 'inactive';
  }
  mouseEnter4() {
    this.hoverState4 = 'active';
  }
  mouseLeave4() {
    this.hoverState4 = 'inactive';
  }
  constructor() {}
  ngOnInit() {}
}
