import { Component, OnInit, Input } from '@angular/core';
import { Cat, Dog } from '../cpInterface';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  @Input() cat01:Cat[];
  @Input() cat02:Cat[];
  @Input() cat03:Cat[];

  @Input() dog01:Dog[];
  @Input() dog02:Dog[];
  @Input() dog03:Dog[];
  ngOnInit(): void {
  }

}
