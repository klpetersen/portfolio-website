import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  email: string = 'petersen1994@gmail.com';

  constructor( private titleService: Title) {
    this.titleService.setTitle("Kayla Petersen - Contact");
  }

}
