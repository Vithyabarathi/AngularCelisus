import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  public cel: any = "";
  public fah: any = "";

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }
  ftoc(v) {
    let temp = (Number(v) - 32) * (5 / 9);
    this.cel = Math.round(temp * 10) / 10;
  }
  ctof(v) {
    let temp = Number(v) * 1.8 + 32;
    this.fah = Math.round(temp * 10) / 10;
  }
}
