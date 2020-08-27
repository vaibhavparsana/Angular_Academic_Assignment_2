import { Component } from '@angular/core';
import { Parsanav } from "./parsanav";
import { Cat, Dog } from './cpInterface';
import cats from "../assets/data/cat.json";
import dogs from "../assets/data/dog.json";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parsanav-A4';
  bio:Parsanav ={
    sid:0,
    sname:"Name",
    scampus:"Campus",
    slogin:"Login",
    stitle:"Assignment#4/Angular More"
};
  t01 :Cat[] =cats.cat01;
  t02 :Cat[]= cats.cat02;
  t03 :Cat[]= cats.cat03;

  d01 :Dog[] =dogs.dog01;
  d02 :Dog[]= dogs.dog02;
  d03 :Dog[]= dogs.dog03;
}
