import { Component, input, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

@Input() id!: number;
  @Input() title='title';
  @Input() desc='hgfgh';
  @Input() imglink='hgfgh';


}
