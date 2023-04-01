import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab2-angular';

  constructor(public sharedService: SharedService) {}

  changeContrast(contrast: boolean) {
    this.sharedService.contrast = contrast;
  }
}
