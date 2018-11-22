import { contact } from './../../model/model.contact';
import { ContactService } from './../../Services/contact.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
pageContacts :any;
motCle:string="";
currentPage:number=0;
size:number=5;
pages: Array<number> ;
totalPages: number;
//injecter HTTP
  constructor(private http: HttpClient,public contactService:ContactService
    ,public router:Router) {

   }

  ngOnInit() {
      }

      doSercher(){
        this.contactService.getContacts(this.motCle,this.currentPage,this.size)
        .subscribe((data:any )=>{
           this.pageContacts=data,
           this.pages = new Array(data.totalPages);

           console.log(new Array(data.totalPages)
          }
          , err => {
             console.log(err);
           }) ;
      }

      chercher(){
        this.doSercher();
      }

      gotoPage(i:number){
      this.currentPage=i;
      this.doSercher();
      }

      onEditContact(id:number){
        this.router.navigate(['editContact',id]);
      }

      onDeleteContact (c:contact){
        let confirm=window.confirm('Est vous sure supprimer?');
        if(confirm==true){
         this.contactService.deleteContact(c.id)
         .subscribe((data:any )=>{
        this.pageContacts.content.splice(
        this.pageContacts.content.indexOf(c),1)
             console.log(data)
            } , err => {
              console.log(err);

  }) ;
      }
    }
}
