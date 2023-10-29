import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any; 

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements AfterViewInit {
  constructor(public router: Router) { }
  ngAfterViewInit(): void {
    this.initializeTooltips();
  }

  private initializeTooltips(): void {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach((tooltipTriggerEl: Element) => {
      new bootstrap.Tooltip(tooltipTriggerEl)
    });
  }
}
