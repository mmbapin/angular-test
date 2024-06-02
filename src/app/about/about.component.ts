import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  data: any;
  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation().extras.state?.["response"];
    console.log("Data :", this.data);
  }

  ngOnInit() {}
}
