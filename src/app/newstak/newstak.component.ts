import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-newstak',
  templateUrl: './newstak.component.html',
  styleUrls: ['./newstak.component.css']
})
export class NewstakComponent implements OnInit {
 

  public serviceJsonData:any[];
  private jsonUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLgQpVybjq5mlCtsocMrLBKuaGSp0-R_zT&key=AIzaSyCkyrTWm51YegFEHTpA5oBh7rJ61CsCDZ4&pageToken=CAUQAA&maxResults=15';
  
  constructor(private dataService:ServiceService) { }

  ngOnInit() {
    this.dataService.getJsonData(this.jsonUrl).subscribe(data => this.serviceJsonData = data.items);

  }



}
