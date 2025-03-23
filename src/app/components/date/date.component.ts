import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  sendMail() {
    let params = {
      name: (document.getElementById("name") as HTMLInputElement).value,
      email: (document.getElementById("email") as HTMLInputElement).value,
      message: (document.getElementById("message") as HTMLTextAreaElement).value
    };

    const serviceID = "service_8p7kv7q";
    const templateID = "template_8d0ai3q";
    const publicKey = "lWNjzo7vaCfQV0Nbt"

    emailjs.send(serviceID, templateID, params, publicKey)
      .then(response => {
        console.log("Success!", response);
        alert("Your message has been sent successfully!");

        (document.getElementById("name") as HTMLInputElement).value = "";
        (document.getElementById("email") as HTMLInputElement).value = "";
        (document.getElementById("message") as HTMLTextAreaElement).value = "";

      })
      .catch(error => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again.");
      });
  }

}
