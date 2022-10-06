import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressive-picture',
  templateUrl: './progressive-picture.component.html',
  styleUrls: ['./progressive-picture.component.css'],
})
export class ProgressivePictureComponent implements OnInit {
  @Input()
  src!: { webp: string; default: string; alt: string };
  constructor() {}

  ngOnInit(): void {}
}
