import { AfterViewInit, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements DoCheck{
  
  // ngAfterViewInit(): void {
  //   console.log("Han sido inicializados la vista del componente y las vistas de los hijos")
  // }

  // isDestroyed: boolean = true
  
  // countDown: number;
  // intervalID: any;

  //constructor() {
    // this.countDown = 10;
    // this.intervalID = setInterval(() => {
    //   this.countDown--;
    //   if(this.countDown === 0) {
    //     clearInterval(this.intervalID)
    //     this.isDestroyed = false
    //   }
    // }, 1000)
  //}
  value: number = 0;
  previousValue: number = 0;
  changesDetected: boolean = false;

  updateValue(): void{
    this.value++
    setInterval(() =>{
      this.changesDetected = false
    }, 2000)
  }

  ngDoCheck(): void {
    if(this.value !== this.previousValue){
      this.changesDetected = true
      this.previousValue = this.value
    }
  }
}
