import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'lab2-angular';

  chatStete: boolean = false;

  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
  }

  changeContrast(contrast: boolean) {
    this.sharedService.contrast = contrast;
  }

  toggleChat() {
    this.chatStete = !this.chatStete;
  }

}
