import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Product,
  ProductService
} from '../../services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: string;
  item: Product;
  orderForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private _fb: FormBuilder,
              private service: ProductService
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.item = this.service.getItemById(this.id);
    this.orderForm = this._fb.group({
      quantity: new FormControl('', [Validators.required]),
      address: new FormGroup({
        line1: new FormControl('', [Validators.required]),
        line2: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        zip: new FormControl('', [Validators.required]),
      })
    })
  }

  addToCart(): void {

  }
}
