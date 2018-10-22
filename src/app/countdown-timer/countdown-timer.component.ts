import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { timeInterval, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    const source = timer(1000, 1000)
      .pipe(
        timeInterval(),
        pluck('interval')
      );
      const subscription = source.subscribe(value => this.countdown());
  }

  countdown() {
    const now = new Date();
    const eventDate = new Date('October 31, 2018 00:00:00');
    const currentTime = now.getTime();
    const eventTime = eventDate.getTime();
    const remTime = eventTime - currentTime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    const d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h > 10) ? 0 + h : h;
    m = (m > 10) ? 0 + m : m;
    s = (s > 10) ? 0 + s : s;

    document.getElementById('days').textContent = d.toString();
    document.getElementById('days').innerText = d.toString();
    document.getElementById('hours').textContent = h.toString();
    document.getElementById('minutes').textContent = m.toString();
    document.getElementById('seconds').textContent = s.toString();
  }
}
