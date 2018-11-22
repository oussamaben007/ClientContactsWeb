import { ContactService } from './../../Services/contact.service';
import { contact } from './../../model/model.contact';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
mode:number=1;
contact:contact=new contact();
idContact:number;
  constructor(public activatedRoute:ActivatedRoute, public contactService:ContactService,public router:Router   ) {
    console.log("....................");
    console.log(activatedRoute.snapshot.params['id']);
    console.log("....................");

    this.idContact=activatedRoute.snapshot.params['id'];

   }

  ngOnInit() {
  this.contactService.getContact(this.idContact)
  .subscribe((data:any )=>{
   this.contact=data

    console.log(data)
   } , err => {
      console.log(err);
    }) ;
  }

  UpdateContact(){
this.contactService.updateContact(this.contact)
.subscribe((data:any )=>{
  alert("Mise à jour effectuée");
  this.router.navigate(['contact']);
   console.log(data)
  } , err => {
     console.log(err);
     alert("Probleme");
   }) ;
 }

}
