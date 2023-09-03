import { Component, OnInit } from '@angular/core';

// jquery
import * as $ from 'jquery';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss']
})
export class TopPanelComponent {
  user_drop_list = [
    {
      number:'1',
      name:'Profile',
      udiv:'usr-icon d-flx ai-cntr',
      icon:'fa-solid fa-user'
    },
    {
      number:'2',
      name:'Settings',
      udiv:'usr-icon d-flx ai-cntr',
      icon:'fa-solid fa-gear'
    },
    {
      number:'3',
      name:'Log out',
      udiv:'usr-icon d-flx ai-cntr',
      icon:'fa-solid fa-right-from-bracket'
    }
  ];
  ngOnInit():void {
    $('.user-information').on('click',function(){
      $('.user-drop').css('display','block');
    });
  }
  public openinbos(){
    alert('adfasdff');

  }
}
