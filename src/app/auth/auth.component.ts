import {Component, OnInit} from "@angular/core";
import {Route, Router} from "@angular/router";

@Component({
  selector:"wfm-auth",
  templateUrl: 'auth.component.html',
  styleUrls:["./auth.scss"]
})

export class AuthComponent implements OnInit{
  constructor(private router:Router) {
  }

  ngOnInit() {
    this.router.navigate(["/Login"]);
  }

}
