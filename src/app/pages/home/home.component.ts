import {
  Component,
  OnInit
} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products$: Observable<any>;

  constructor(private service: ProductService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.products$ = this.service.products;
  }

  showDetails($event: any, id: any) {
    this.router.navigateByUrl(`/details/${id}`)
  }
}
