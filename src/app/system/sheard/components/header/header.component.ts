import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {AuthServis} from "../../../../shard/services/auth.servis";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  data:Date = new Date();
  user!:any;

  constructor(
    private authServis:AuthServis,
    private router: Router
    ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  Onlogaut(){
    this.authServis.logout();
    this.router.navigate(['/Login']);
  }

}
