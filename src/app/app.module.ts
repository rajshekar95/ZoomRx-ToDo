import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material';

import { AppComponent, DialogForAddCard, DialogForNewList, DialogForCardDetails } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
	DialogForAddCard,
	DialogForNewList,
	DialogForCardDetails
  ],
  imports: [
     BrowserModule,
	BrowserAnimationsModule,
	MatButtonModule, 
	MatCheckboxModule,
	 MatCardModule,
	 MatDividerModule,
	 MatGridListModule,
	 MatToolbarModule,
	 MatDialogModule,
	 FormsModule,
	 MatSnackBarModule,
	 MatFormFieldModule
  ],
  providers: [], 
  bootstrap: [AppComponent],
  entryComponents: [DialogForAddCard, DialogForNewList, DialogForCardDetails ]
})
export class AppModule { }
