import { Injectable ,Output,EventEmitter} from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';

import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(
   // private firestore: AngularFirestore
  ) { }
  @Output() scoreData:EventEmitter<any>= new EventEmitter(); 
  
compoShowValue='Start';
private compoShow: BehaviorSubject<string> = new BehaviorSubject<string>(this.compoShowValue);

compoShow$: Observable<string> = this.compoShow.asObservable();
level=0;

anstext='';

score=0;

textMaker(text:string){
  this.anstext=text;

}
  
sendValues(){
  this.scoreData.emit(this.score);
}
readData() {
 // return this.firestore.collection('linkswipe').snapshotChanges();
}
changeCompo(comp:string){
  this.compoShowValue=comp;
  this.compoShow.next(this.compoShowValue);
}
}