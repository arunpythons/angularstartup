import { Component } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent {
  side_panel_list = [
    {
      number:'1',
      name:'Dashboard',
      icon:'fa-solid fa-gauge',
      side_iclass:'side-icon-box',
    },
    {
      number:'2',
      name:'Home',
      icon:'fa-solid fa-house',
      side_iclass:'side-icon-box',
    },
    {
      number:'3',
      name:'Inbox',
      icon:'fa-solid fa-inbox',
      side_iclass:'side-icon-box',
    },
    {
      number:'4',
      name:'Chart',
      icon:'fa-solid fa-chart-pie',
      side_iclass:'side-icon-box',
    },
    {
      number:'5',
      name:'Table',
      icon:'fa-solid fa-table-list',
      side_iclass:'side-icon-box',
    },
    {
      number:'6',
      name:'Forms',
      icon:'fa-solid fa-file',
      side_iclass:'side-icon-box',
    },
  ];
}
