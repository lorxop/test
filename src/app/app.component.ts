import { Component, OnInit, Renderer2, ViewChild,} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{  
  form = new FormGroup({
   
  })

  ngOnInit(){

  }

  user = {
   name: '',
   surname: '',
  };

  title = 'my-app';
  birthday = '';
  select_fram = '';
  select_version = '';
  hobby = '';
  duration = '';
  email = '';
}
