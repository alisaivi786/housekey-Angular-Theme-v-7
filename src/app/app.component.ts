import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { Settings, AppSettings } from './app.settings';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   
  public settings: Settings;
  constructor(public appSettings:AppSettings, public router:Router,
              @Inject(PLATFORM_ID) private platformId: Object){
    this.settings = this.appSettings.settings;
  }

  ngAfterViewInit(){ 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {   
        setTimeout(() => {
          if (isPlatformBrowser(this.platformId)) {
            window.scrollTo(0,0);
          }
        }); 
      }            
    });    
  }

}
