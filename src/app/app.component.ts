import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = '';
  routeSub: Subscription = new Subscription();

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.http
      .get(`${APP_CONFIG.apiBaseUrl}/users`)
      .subscribe((users) => console.log(`users fetched`));

    this.routeSub = this.router.events
      .pipe(
        filter((evt) => evt instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((r) => {
          while (r.firstChild) {
            r = r.firstChild;
          }
          return r;
        })
      )
      .subscribe((evt) => {
        this.title = evt.snapshot.data['title'];

        this.title
          ? this.titleService.setTitle(this.title)
          : this.titleService.setTitle('Wilat App');
      });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
