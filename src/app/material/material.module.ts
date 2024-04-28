import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

const materialArr =[MatSidenavModule,MatToolbarModule,MatListModule,MatIconModule,
  MatButtonModule,MatTabsModule,MatCardModule,MatDialogModule,MatFormFieldModule,
  MatInputModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialArr
  ],
  exports:[
   ...materialArr
  ]
})
export class MaterialModule { }
