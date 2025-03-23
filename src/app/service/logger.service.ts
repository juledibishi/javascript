import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private selectedNodeId = new BehaviorSubject<string | null>(null);

  getSelectedNodeId() {
    return this.selectedNodeId.asObservable();
  }

  setSelectNodeId(nodeId: string | null) {
    return this.selectedNodeId.next(nodeId)
  }


  log(message: string) {
    console.log(message);
  }
  constructor() { }
}
