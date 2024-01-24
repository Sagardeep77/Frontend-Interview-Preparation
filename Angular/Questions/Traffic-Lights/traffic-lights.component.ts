/*

Build a traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely. Each light should be lit for the following durations:

Red light: 4000ms
Yellow light: 1000ms
Green light: 3000ms

You are free to exercise your creativity to style the appearance of the traffic light.

*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-lights',
  templateUrl: './traffic-lights.component.html',
  styleUrl: './traffic-lights.component.css',
})
export class TrafficLightsComponent implements OnInit {
  private lights: string[] = ['G', 'Y', 'R'];
  public currentLight: string = '';
  ngOnInit() {
    this.handleLight('G');
  }

  handleLight(currLight: string) {
    this.currentLight = currLight;
    switch (currLight) {
      case 'G': {
        setTimeout(() => {
          this.handleLight('Y');
        }, 3000);
        return;
      }
      case 'Y': {
        setTimeout(() => {
          this.handleLight('R');
        }, 1000);
        return;
      }
      case 'R': {
        setTimeout(() => {
          this.handleLight('G');
        }, 4000);
        return;
      }
      default: {
        return;
      }
    }
    
  }
}
