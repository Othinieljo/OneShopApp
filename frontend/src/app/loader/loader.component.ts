import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from '../_services/loading.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isloading : Subject<boolean> = this.loaderService.isLoading
  constructor(private loaderService : LoadingService){}
}
