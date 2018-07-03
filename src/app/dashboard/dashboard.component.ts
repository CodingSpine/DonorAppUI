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
        var container = document.querySelector('#dashboard-container');
        if (sidenavElement.classList.contains('sidenav-closed')){
            sidenavElement.classList.add('sidenav-open');
            sidenavElement.classList.remove('sidenav-closed');
            // container
        }
        else {
            sidenavElement.classList.add('sidenav-closed');
            sidenavElement.classList.remove('sidenav-open');
        }
    }

}
