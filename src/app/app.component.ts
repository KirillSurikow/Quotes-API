import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  category: string = 'happiness'
  image: string = '';
  qoute: string = '';
  author: string = '';

  ngOnInit() {
    setInterval(this.generateQuote ,10000)
    


    // const request = new XMLHttpRequest();
    // request.open('GET', 'https://serpapi.com/search.json?q=' + this.category +
    //   '&tbm=isch&ijn=1&hl=en&gl=us&google_domain=google.com&api_key=ac51a393265f8b53a2b34f6bcc197265f7b0441caf2f6e4674e30e52abb719ef')
    // request.send();
    // request.onload = () => {
    //   if (request.status === 200) {
    //     console.log(JSON.parse(request.response))
    //   } else {
    //     console.log('error')
    //   }
    // }

  }

  generateQuote() {

    let data = new Observable(observer => {
      fetch('https://api.api-ninjas.com/v1/quotes?category=' + this.category, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'lyuW1W63fWMWxyj7fVQpoQ==bepg5b51sqWNeZDS',
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json()) // or text() or blob() etc.
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });

    data.subscribe(data => console.log(data));
  }
  // async generateQuote() {
  //   await fetch('https://api.api-ninjas.com/v1/quotes?category=' + this.category, {
  //     method: 'GET',
  //     headers: {
  //       'X-Api-Key': 'lyuW1W63fWMWxyj7fVQpoQ==bepg5b51sqWNeZDS',
  //       'Content-Type': 'application/json'
  //     },
  //   }).then(res => {
  //     return res.json()
  //   })
  //     .then(data => {
  //       this.qoute = data[0]['quote']
  //       this.author = data[0]['author']
  //       console.log(this.qoute)
  //     })
  //     .catch(error => console.log(error))
  // }
}



