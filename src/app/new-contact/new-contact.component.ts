import { ContactService } from './../../Services/contact.service';
import { Component, OnInit } from '@angular/core';
import { contact } from './../../model/model.contact';
@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact:contact = new contact();
  mode:number=1;
  constructor(public contactService:ContactService) { }

  ngOnInit() {
  }

  saveContact(){
   // console.log(this.contact);
    this.contactService.SaveContacts(this.contact)
    .subscribe((data:any )=>{
     this.contact=data
     this.mode=2
     } , err => {
        console.log(err);
      }) ;
  }

}
