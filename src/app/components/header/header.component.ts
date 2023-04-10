import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public appService: AppService) {
    
  }

  ngOnInit(): void {

  }

  show: boolean = false;

  showCollapse() {
    this.show = !this.show;
  }

  deslogar() {
    this.appService.deslogar();
  }

}
