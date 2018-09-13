import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  public serviceJsonData:any[];
  public id:any = "";

 constructor(private dataService:ServiceService,private Activeroute: ActivatedRoute) { }


  ngOnInit() {
    this.id = this.Activeroute.snapshot.params.videoId;
    this.dataService.getJsonData('https://www.googleapis.com/youtube/v3/videos?part=id%2Csnippet&id='+this.id+'&key=AIzaSyCkyrTWm51YegFEHTpA5oBh7rJ61CsCDZ4').subscribe(data => this.serviceJsonData = data.items);
    console.log("id====="+this.id)

  }

}
