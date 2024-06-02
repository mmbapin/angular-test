import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Angular Testing Course";

  constructor(private router: Router) {}

  handleRouter(data: string) {
    console.log(data);
    this.router.navigate([data == "COURSE" ? "/" : "/about"], {
      state: {
        response: {
          name: "About Course",
          description: "About Course Description",
        },
      },
    });
  }
}
