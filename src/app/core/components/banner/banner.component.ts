import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnChanges {

  @Input({required: true}) bannerTitle = '';
  @Input() bannerOverview = '';
  // @Input() key = 'LYaJVfiwv0w';
  @Input() key = '';
  
  
  private sanitizer = inject(DomSanitizer)
  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?loop=1&autoplay=1&mute=1&controls=0`)


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['key']){
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?loop=1&autoplay=1&mute=1&controls=0`);
      
    }
    
  }

}