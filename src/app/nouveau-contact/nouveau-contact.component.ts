import { ContactService } from './../../Services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactService:ContactService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm){
  this.contactService.SaveContacts(dataForm)
  .subscribe((data:any )=>{
   console.log(data)
    } , err => {
       console.log(JSON.parse(err.body).message);
     }) ;
  }
}
