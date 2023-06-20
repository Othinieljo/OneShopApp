import { Component, OnInit } from '@angular/core';
import { LoadingService } from './_services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'OneShopApp';

  constructor(public loadingService : LoadingService){}
  ngOnInit(): void {
    // console.log(this.loadingService.isloading)
    // setInterval(() => {
    //   console.log(this.loadingService.isloading)
    // },3000)

  }
}
