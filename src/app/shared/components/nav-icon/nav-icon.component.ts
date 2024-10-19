import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-nav-icon',
  templateUrl: './nav-icon.component.html',
  styleUrls: ['./nav-icon.component.css']
})
export class NavIconComponent {
  auth = inject(AuthService);
  @ViewChild('checkbox') check!:ElementRef
  @Input() color: string = '#E50914'; // default color: #333
  @Output() toggled = new EventEmitter<boolean>();
 
  senddata(){
    // console.log(this.check.nativeElement.checked);
    this.toggled.emit(this.check.nativeElement.checked)
    
  }
}
