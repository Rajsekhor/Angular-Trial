import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importing a new module
import { FormsModule } from '@angular/forms';
import { ToDoComponent } from './todo/todo.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TrialComponent } from './trial/trial.component';
import { HttpClientModule } from '@angular/common/http';
import { RandomComponent } from './random/random.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TodoAddComponent,
    TodoListComponent,
    TrialComponent,
    RandomComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // add a new import module
    FormsModule,
    MatSliderModule,
     BrowserAnimationsModule,
     MatBadgeModule,
     MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
