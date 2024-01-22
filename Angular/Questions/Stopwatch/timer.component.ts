import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  public hours: number = 999999908;
  public minutes: number = 12389713;
  public seconds: number = 123892890;

  public isTimerRunning: boolean = false;
  public timerRef : any;

  // constructor(){
  //   this.hours = 0;
  //   this.minutes = 0;
  //   this.seconds = 0;
  // }
  updateTime() {
    console.log(this.seconds)

    if (this.seconds >= 59) {
      if (this.minutes >= 59) {
        this.hours++;
        this.minutes = 0;
      }
      else {
        this.minutes++;
      }
      this.seconds = 0;
    }
    else{
      this.seconds++;
    }
  }

  onStartPause() {
    this.isTimerRunning = !this.isTimerRunning;
    if (this.isTimerRunning) {
      this.timerRef = setInterval(() =>{this.updateTime()},1000);
    }
    else{
      clearInterval(this.timerRef);
    }
  }

  onReset() {
    clearInterval(this.timerRef)
    this.isTimerRunning = false;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
}
