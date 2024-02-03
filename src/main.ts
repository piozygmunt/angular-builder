import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import url from 'url';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: '',
})
export class AppComponent {
  title = 'angular-builder';

  constructor() {
    console.log("urlTest", url);
  }
}

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
