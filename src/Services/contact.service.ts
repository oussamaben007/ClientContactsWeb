import { contact } from './../model/model.contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ContactService{

constructor(public http:HttpClient){
}

getContacts(motCle:string,page:number,size:number){
return this.http.get("http://localhost:8080/chercherContact?mc="
+motCle+"&size="+size+"&page="+page);
}

 getContact(id:number){
    return this.http.get("http://localhost:8080/contacts/"+id);
    }

    SaveContacts(contact:contact){
      return this.http.post("http://localhost:8080/contacts",contact);
      }

      updateContact(contact:contact){
        return this.http.put("http://localhost:8080/contacts/"+contact.id,contact);
        }
        deleteContact(id:number){
          return this.http.delete("http://localhost:8080/contacts/"+id);
          }

}
