import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {EnemyMovement} from "../../AngularClasses/enemy-movement";
import {Point} from "../../AngularClasses/point";
@Component({
  selector: 'app-opposition',
  templateUrl: './app.opposition.component.html',
  styleUrls: ['./app.opposition.component.css']
})
export class AppOppositionComponent implements AfterViewInit{
  @ViewChild('OppositionImg') _oppositionImg:ElementRef;
  _movement?: EnemyMovement;
  public constructor() {

    this._oppositionImg = ViewChild("OppositionImg")
    this._movement = undefined;
  }

  ngAfterViewInit(): void {
    console.log("X=", this._oppositionImg.nativeElement.x);
    console.log("Y=", this._oppositionImg.nativeElement.y);

    console.log("Style=", this._oppositionImg.nativeElement.style);


    let pageWidth: number = window.innerWidth;
    let pageHeight: number = window.innerHeight;
    console.log("pageWidth=", pageWidth, "pageHeight=", pageHeight);

    this._movement = new EnemyMovement(1, new Point(pageWidth/2, pageHeight/2), new Point(50,50));



    setInterval(function (_this: AppOppositionComponent, pageWidth: number, pageHeight: number) {
      if (_this._movement?.IsEnemyOutOfScreen()){
        _this._movement?.RestartMovement()
      }

      _this._movement?.Move()
      _this._movement?.ApplyPosition(_this._oppositionImg.nativeElement.style)
    }, 40, this, pageWidth, pageHeight);
  }
}
