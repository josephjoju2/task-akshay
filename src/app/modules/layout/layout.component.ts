import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  selectedItem: any;

  constructor() { }

  ngOnInit(): void {
    console.log(location.pathname);
    this.checkTab()
    
  }

  checkTab(){
    
    if(location.pathname == '/layout/table'){
      this.selectedItem=1
    }
    if(location.pathname == '/layout/test'){
      this.selectedItem=2
    }
  }

  listClick(newValue:any) {
    console.log(newValue);
    this.selectedItem = newValue;  
  }
  
}
