import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration';

  username:string="";
     password:string="";
     confirmPassword:string="";
     gender:string="";
     country:string="";
     licenseAgreement:boolean=false;

     msg:string="";

     RegisterClick(){
       this.msg = "Username : "+this.username+"<br/>Password:"+this.password
       +"<br/>ConfirmPassword:"+this.confirmPassword
       +"<br/>Gender : "+this.gender+"<br/>Country : "+this.country
       +"<br/>License Agreement : "+this.licenseAgreement;
     }

}
