import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title: string;

  @Output() showDetails: EventEmitter<any> = new EventEmitter();

  itemClicked() {
    this.showDetails.emit();
  }
}
