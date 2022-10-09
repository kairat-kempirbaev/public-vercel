import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css'],
})
export class ImageContainerComponent implements OnInit {
  @Input()
  src!: { default: string; alt: string ;leqTablet:string};
  constructor() {}
  ngOnInit(): void {}
}
