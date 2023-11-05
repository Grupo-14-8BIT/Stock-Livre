import { Component, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any; 

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements AfterViewInit {
  constructor(public router: Router, private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.initializeTooltips();
  }

  private initializeTooltips(): void {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach((tooltipTriggerEl: Element) => {
      new bootstrap.Tooltip(tooltipTriggerEl)
    });
  }

  @HostListener('mouseover', ['$event'])
  expandSidebar(event: MouseEvent) {
    this.elRef.nativeElement.querySelector('.collapsed').classList.remove('collapsed');
  }

  @HostListener('mouseout', ['$event'])
  collapseSidebar(event: MouseEvent) {
    this.elRef.nativeElement.querySelector('.d-flex').classList.add('collapsed');
  }
}
