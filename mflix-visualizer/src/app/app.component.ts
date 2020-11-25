import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mflix-visualizer';
  results : Object[];
  obs : Observable<Object>;

  constructor(private http : HttpClient) {}

  load10Movies()
  {
    this.obs = this.http.get('https://3000-dec1256b-f968-45fa-bde4-cd5c97396ad9.ws-eu01.gitpod.io/movies');
    this.obs.subscribe(this.getData);
  }

  getData = (data) => {
    this.results = data;
  }
}
