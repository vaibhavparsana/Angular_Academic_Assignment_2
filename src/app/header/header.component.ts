import { Component, OnInit, Input } from '@angular/core';
import { Parsanav } from '../parsanav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerInfo: Parsanav;
  constructor() { }

  ngOnInit(): void {
  }

}
