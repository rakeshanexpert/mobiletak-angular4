import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls:['header.component.css'],
  animations: [
       trigger('verticalOpen', [
           state('hide',style({
            '-webkit-transform':'translate(-200px,0px)',
            'transform':'translate(-150px,0px)'
          })),
           state('show',style({ 
               '-webkit-transform':'translate(0px,0px)',
               'transform':'translate(0px,0px)'
          })),
         transition('hide => show', animate('100ms ease-in')),
         transition('show => hide', animate('100ms ease-out'))
    ])
   

  ]
  
})
export class HeaderComponent implements OnInit {


  constructor() { }


  ngOnInit() {}


    public closeOrOpen = 'hide';
    public searchBox = false;
    public overlayClass = '';
   
    
    openNav(){
        if(this.closeOrOpen == 'hide'){
            this.closeOrOpen = 'show',
            this.overlayClass = 'is-visible'

        }else if(this.closeOrOpen == 'show'){
          this.closeOrOpen = 'hide',
          this.overlayClass = ''
      }
    }

    overlayEvent(){
      this.openNav()
    }

    openSearch(){
      this.searchBox = !this.searchBox;
    }

    
    
    

}
