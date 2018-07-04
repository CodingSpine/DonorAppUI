import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    mode = new FormControl('over');
    constructor() {

    }

    ngOnInit() {

    }

    sideNavToggle(): void {
        var sidenavElement = document.querySelector('#sidenav');
        var mainContent = document.querySelector('#main-content');
        if (sidenavElement.classList.contains('sidenav-closed')){
            sidenavElement.classList.add('sidenav-open');
            mainContent.classList.add('main-content-blurred');
            sidenavElement.classList.remove('sidenav-closed');
            mainContent.classList.remove('main-content-focused');
            // container
        }
        else {
            sidenavElement.classList.add('sidenav-closed');
            mainContent.classList.add('main-content-focused');
            sidenavElement.classList.remove('sidenav-open');
            mainContent.classList.remove('main-content-blurred');
        }
    }

}
