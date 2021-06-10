import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sender-dash-board',
  templateUrl: './sender-dash-board.component.html',
  styleUrls: ['./sender-dash-board.component.scss'],
})
export class SenderDashBoardComponent implements OnInit {
  stateDoc: AngularFirestoreDocument<any>;
  state: Observable<any>;

  constructor(private angularFirestore: AngularFirestore) {
    this.stateDoc = this.angularFirestore.doc<any>('/try_collection/students');
    this.state = this.stateDoc.valueChanges();
  }

  ngOnInit(): void {}
}
