import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './components/array/array.component';
import { DateComponent } from './components/date/date.component';
import { FilterComponent } from './components/filter/filter.component';
import { FindComponent } from './components/find/find.component';
import { ForeachComponent } from './components/foreach/foreach.component';
import { IncludeComponent } from './components/include/include.component';
import { JoinComponent } from './components/join/join.component';
import { JsonComponent } from './components/json/json.component';
import { LoopComponent } from './components/loop/loop.component';
import { MapComponent } from './components/map/map.component';
import { ObjectComponent } from './components/object/object.component';
import { PushPopShiftUnshiftComponent } from './components/push-pop-shift-unshift/push-pop-shift-unshift.component';
import { ReduceComponent } from './components/reduce/reduce.component';
import { SortComponent } from './components/sort/sort.component';
import { SpliceComponent } from './components/splice/splice.component';
import { SplitComponent } from './components/split/split.component';
import { SwitchComponent } from './components/switch/switch.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/angular/components/home/home.component';

const routes: Routes = [
  { path: 'array', component: ArrayComponent },
  { path: 'date', component: DateComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'find', component: FindComponent },
  { path: 'foreach', component: ForeachComponent },
  { path: 'include', component: IncludeComponent },
  { path: 'join', component: JoinComponent },
  { path: 'json', component: JsonComponent },
  { path: 'loop', component: LoopComponent },
  { path: 'map', component: MapComponent },
  { path: 'object', component: ObjectComponent },
  { path: 'push-pop-shift-unshift', component: PushPopShiftUnshiftComponent },
  { path: 'reduce', component: ReduceComponent },
  { path: 'sort', component: SortComponent },
  { path: 'splice', component: SpliceComponent },
  { path: 'split', component: SplitComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'test', component: TestComponent },
  { path: 'angular', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
