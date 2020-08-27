import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POKE-API';
  
  


public scp$: Observable<any>;

  constructor(private http: HttpClient){


  }

  

  OnInput(event: any) {
    var input = event.target.value;

    if (input == "SUAMAE") {
      var url = "https://pokeapi.co/api/v2/pokemon/snorlax";

      this.http.get(url).subscribe(d=> console.log(d));
      
      this.scp$ = this.http.get(url);
      
    }else{

      var url = "https://pokeapi.co/api/v2/pokemon/"+input;

      this.http.get(url).subscribe(d=> console.log(d));
      
      this.scp$ = this.http.get(url);
      
    }

    

    }
  
  }



