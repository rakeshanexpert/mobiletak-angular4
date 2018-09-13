import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'; //include for routing


import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { LiveComponent } from './live/live.component';
import { NewstakComponent } from './newstak/newstak.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
    { 
        path: '', 
        redirectTo:'live', 
        pathMatch:'full'
    },
    {
        path:'live',
        component:LiveComponent
    },
    {
        path:'story/:videoId',
        component:StoryComponent
    },
    
    {
        path:'newstak',
        component:NewstakComponent
    },
    
   
  ];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes)
    ],
    exports:[
       RouterModule 
    ]
              
})

export class Approutingmodel{}
export const routingComponents = [HeaderComponent,  NavComponent,  LiveComponent,  NewstakComponent,StoryComponent]