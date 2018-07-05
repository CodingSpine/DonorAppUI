import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    mode = new FormControl('over');
    toggleOpened = false;
    sidenavElement;
    mainContent;

    constructor() {

    }

    ngOnInit() {
        this.sidenavElement = document.querySelector('#sidenav');
        this.mainContent = document.querySelector('#main-content');
    }

    sideNavToggle(): void {
        if (this.sidenavElement.classList.contains('sidenav-closed')){
            this.sidenavElement.classList.add('sidenav-open');
            this.mainContent.classList.add('main-content-blurred');
            this.sidenavElement.classList.remove('sidenav-closed');
            this.mainContent.classList.remove('main-content-focused');
            this.toggleOpened = true;
        }
        else {
            this.sidenavElement.classList.add('sidenav-closed');
            this.mainContent.classList.add('main-content-focused');
            this.sidenavElement.classList.remove('sidenav-open');
            this.mainContent.classList.remove('main-content-blurred');
            this.toggleOpened = false;
        }
    }

    sideNavMinimize(): void {
        if (!this.toggleOpened){
            this.sidenavElement.classList.remove('sidenav-open');
        }
    }

    sideNavPreview(): void {
        if (!this.toggleOpened){
            this.sidenavElement.classList.add('sidenav-open');
        }

    }

}
