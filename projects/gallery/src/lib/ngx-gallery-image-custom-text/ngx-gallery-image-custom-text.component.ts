import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-gallery-image-custom-text',
  templateUrl: './ngx-gallery-image-custom-text.component.html',
  styleUrls: ['./ngx-gallery-image-custom-text.component.scss'],
  standalone: false
})
export class NgxGalleryImageCustomTextComponent implements OnInit {

  @Input() customTextArray: string[][][];
  @Input() customTextMaxWidth: string;
  @Input() showCustomText: boolean;
  @Input() selectedIndex: number;

  constructor() { }

  ngOnInit(): void {
  } 

}
