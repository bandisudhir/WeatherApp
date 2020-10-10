import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
    }
    ngAfterViewInit() {
        this.runOnRouteChange();
    }
    runOnRouteChange(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches) {
            const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
            const ps = new PerfectScrollbar(elemMainPanel);
            ps.update();
        }
    }
}
