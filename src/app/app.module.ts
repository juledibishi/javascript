import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { FindComponent } from './components/find/find.component';
import { ForeachComponent } from './components/foreach/foreach.component';
import { JoinComponent } from './components/join/join.component';
import { JsonComponent } from './components/json/json.component';
import { MapComponent } from './components/map/map.component';
import { PushPopShiftUnshiftComponent } from './components/push-pop-shift-unshift/push-pop-shift-unshift.component';
import { SpliceComponent } from './components/splice/splice.component';
import { SortComponent } from './components/sort/sort.component';
import { ReduceComponent } from './components/reduce/reduce.component';
import { ObjectComponent } from './components/object/object.component';
import { SwitchComponent } from './components/switch/switch.component';
import { LoopComponent } from './components/loop/loop.component';
import { ArrayComponent } from './components/array/array.component';
import { DateComponent } from './components/date/date.component';
import { IncludeComponent } from './components/include/include.component';
import { TestComponent } from './components/test/test.component';
import { SplitComponent } from './components/split/split.component';
import { HomeComponent } from './components/angular/components/home/home.component';
import { PersonComponent } from './components/angular/components/person/person.component';
import { SelfMultiplicationPipe } from './components/angular/pipes/self-multiplication.pipe';
import { TextUppercasePipe } from './components/angular/pipes/text-uppercase.pipe';
import { ObjectAccessPipe } from './components/angular/pipes/object-access.pipe';
import { CustomPipePipe } from './components/angular/pipes/custom-pipe.pipe';
import { TimerComponent } from './components/angular/components/timer/timer/timer.component';
import { AppHighlightDirective } from './directive/app-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FindComponent,
    ForeachComponent,
    JoinComponent,
    JsonComponent,
    MapComponent,
    PushPopShiftUnshiftComponent,
    SpliceComponent,
    SortComponent,
    ReduceComponent,
    ObjectComponent,
    SwitchComponent,
    LoopComponent,
    ArrayComponent,
    DateComponent,
    IncludeComponent,
    TestComponent,
    SplitComponent,
    HomeComponent,
    PersonComponent,
    SelfMultiplicationPipe,
    TextUppercasePipe,
    ObjectAccessPipe,
    CustomPipePipe,
    TimerComponent,
    AppHighlightDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
