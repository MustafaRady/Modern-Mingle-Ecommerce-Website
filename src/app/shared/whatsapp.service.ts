import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  // QtYtL6lSwmMMfvD2NFL5axypGcDkx38z <-- secret
  private accountSid: string = 'AC46ca1d017702c2ac34e084286ad962ce';
  private authToken: string = 'e190b62c88448767b1b42e248862d704';
  private from: string = 'whatsapp:+96176771908'; // Your Twilio WhatsApp number

  private apiUrl = 'https://graph.facebook.com/v19.0/275418062332225/messages';
  constructor(private http:HttpClient) { }

  sendMessage(to: string, body: string): Observable<any> {
    to = '+96170705763';
    body='hello there'
    const url = `https://api.twilio.com/2010-04-01/Accounts/${this.accountSid}/Messages.json`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${this.accountSid}:${this.authToken}`)
    });

    const data = new URLSearchParams();
    data.set('From', this.from);
    data.set('To', `whatsapp:${to}`);
    data.set('Body', body);

    return this.http.post(url, data.toString(), { headers });
  }
  
}
