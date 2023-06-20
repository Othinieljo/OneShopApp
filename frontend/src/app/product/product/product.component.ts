import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import { Product } from 'src/app/_interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() Product! : Product;
  @Output() AjouterPanierClick = new EventEmitter<void>();

  AjouterPanier(){
    this.AjouterPanierClick.emit();
  }

}
