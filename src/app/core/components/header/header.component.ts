import { Component, ElementRef, inject, Input, QueryList, Renderer2, ViewChild, ViewChildren,  } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private renderer: Renderer2) { }
  @ViewChild("menuBar") menubar!:ElementRef;
  @Input() userImg: string = '';
  username = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  username1 = JSON.parse(sessionStorage.getItem('loggedInUser')!).email;
  image = "src/assets/aboutpic.jpg"
  auth = inject(AuthService);
  navList = ["Home", "TV Shows", "News & Popular", "My List", "Browse by Language"]

  // 햄버거 버튼의 color(option)
  color = '#E50914';
  /* 
  햄버거 버튼의 상태
  true: OPENED, false: CLOSED
  */
  toggled: boolean = false ;
  visible: boolean | undefined;

  handleToggle(event:boolean){
    this.toggled = event
    console.log(this.toggled);
    
  }
  // handleVisible(){
  //   this.visible= !this.visible
  //   console.log(this.visible);
    
  // }

  
  

}
