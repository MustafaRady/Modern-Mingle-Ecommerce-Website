import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  form:FormGroup;
  pattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
  errors:Array<string> = [];
  messageSuccess:boolean = false;
  constructor(
    private http : HttpClient
  ){
    this.form = new FormGroup({
      "Full Name":new FormControl('',[
        Validators.required,
        
      
      ]),
      "Email":new FormControl('',
        [
          Validators.required,
          Validators.pattern(this.pattern)
        ]
      ),
      "Message":new FormControl('',
        [
          Validators.required
        ]
      )
    })
  }

  getEmail():string {
    return this.form.get('Email').value;
  
  }

  getFullName():string {
    return this.form.get('Full Name').value;
  }

  getMessage():string {
    return this.form.get('Message').value;
  }
  
  onSubmit():void{
      console.log(this.form)
      if(this.form.invalid){
        this.errors=[]
        Object.keys(this.form.controls).forEach(
          (key)=>{
           const controlErrors = this.form.get(key)?.errors;
           if(controlErrors != null){
              Object.keys(controlErrors).forEach(
                errorKey=>{
                  switch(errorKey){
                    case 'required':
                      this.errors.push(key + " is required")
                      break;
                    
                    case 'pattern':
                      this.errors.push(key + " is not valid")
                      break;
                  }
                }
              )
           }
          }
        )
        return ; 
      }
      
      this.messageSuccess=true;
      setTimeout(()=>{
        this.messageSuccess=false
      },2000)
     
      this.errors=[]
      let url:string = " https://api.emailjs.com/api/v1.0/email/send"
      let httpHeaders= new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      );

      let data = {
        service_id: 'service_ojjm9v9',
        template_id: 'contact_form',
        user_id: 'kol25vftQV_9Jc8x5',
        template_params: {
          'from_email': this.getEmail(), // The sender's email address
          'from_name': this.getFullName(),  // This should match the placeholder in your template
          'to_name': "Moustafa Radi", // Example value for the recipient's name
          'message': this.getMessage() // Example message content
        }
      };

      this.http.post<any>(
        url,
        data,
        {
          headers:httpHeaders
        }
      ).subscribe(
        (response)=>{
          
      
        },error=>{
        }
      )

      this.form.reset();
  }

  
}
