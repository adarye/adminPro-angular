import { Component, OnInit } from '@angular/core';
import { SettingsService } from './services/service.index';


declare function init_plugins();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'adminpro';

  ngOnInit(): void {
    init_plugins();
  }
}

