import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { TestComponent } from './test/test.component';
import { TableComponent } from './table/table.component';
import { DeleteDialogComponent } from './test/delete-dialog/delete-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';



const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,

    children:[
      {
        path:"table",
        component:TableComponent
      },
      {
        path:"test",
        component:TestComponent
      }
    ]
  },
  
]

@NgModule({
  declarations: [
    LayoutComponent,
    TestComponent,
    TableComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    RouterModule.forChild(routes),


  ]
})
export class LayoutModule { }
