import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta) { }

  public ngOnInit(): void {
    this.setContentSecurityPolicy();
  }

  private setContentSecurityPolicy() {
    this.meta.addTag({
      'http-equiv': 'Content-Security-Policy',
      content: environment.csp
    });
  }
}
