import { Component, OnInit, Input } from '@angular/core';
import { Parsanav } from '../parsanav';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() footerInfo: Parsanav;
  constructor() { }

  ngOnInit(): void {
  }

}
