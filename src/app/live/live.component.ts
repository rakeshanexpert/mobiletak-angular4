import { Component, OnInit,EventEmitter, Output  } from '@angular/core';
import { ServiceService } from '../service.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import { HeaderComponent } from '../header/header.component';



@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  //public iframeUrl:any = '';
  public serviceJsonData:any[];
  public iframeSource= null;
  private jsonUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLgQpVybjq5mlCtsocMrLBKuaGSp0-R_zT&key=AIzaSyCkyrTWm51YegFEHTpA5oBh7rJ61CsCDZ4&pageToken=CAUQAA&maxResults=15';
 
  constructor(private dataService:ServiceService,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.dataService.getJsonData(this.jsonUrl).subscribe(data => this.serviceJsonData = data.items);
    this.getVideoSrc(undefined);
      
  }
  getVideoSrc(videoId:string){
    if(videoId == undefined || videoId == 'undefined'){           
      this.iframeSource =  this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/lSGrmg5YjcU');
    }else{
      this.iframeSource =  this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+videoId);
    }    

    //console.log(this.iframeSource)
  }

}
