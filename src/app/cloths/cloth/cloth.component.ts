import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICloth } from 'src/app/shared/interfaces/cloth';


@Component({
  selector: 'app-cloth',
  templateUrl: './cloth.component.html',
  styleUrls: ['./cloth.component.css']
})
export class ClothComponent {

  @Input() cloth: ICloth | null = null;
  @Output() edit = new EventEmitter<ICloth>();

  constructor() { }

}
