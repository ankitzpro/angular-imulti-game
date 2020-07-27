import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SwipeGameService {
  anstext='';
  pageno=0;
  word1='';
  word2='';
  answer='';
seconds: number = 8;
score=0;
data:any;
totanswers=[];
  text="Compare the 2 words and decide whether their meaning is almost the same, almost the opposite, or they have another relationship";
   quesarray=[{'difficulty':2,'seconds':12},
    {'difficulty':1,'seconds':12},
    {'difficulty':1,'seconds':12},
    {'difficulty':1,'seconds':12},
    {'difficulty':1,'seconds':12},
    {'difficulty':1,'seconds':12},
    {'difficulty':1,'seconds':8},
    {'difficulty':1,'seconds':8},
    {'difficulty':1,'seconds':8},
    {'difficulty':1,'seconds':8}]
    temparray=[];
  constructor(private firestore: AngularFirestore) { }

  changetext(){
    this.text="If they have the same meaning, swipe left. For almost opposites, swipe right. For all other words pairs, swipe down";

  }

 

  question(){
    if(this.totanswers.length<6){
      this.seconds=12;
    }
    else{
      this.seconds=8;
    }
    var rand= Math.floor(Math.random() * (this.data.length));


       this.word1=this.data[rand].word1;
       this.word2=this.data[rand].word2;
       this.answer=this.data[rand].relation;
       this.data.splice(rand,1);
  }

  userData(data){
    console.log(data);

  }



  getAnswer(eventtext){
    switch(eventtext) {
          case 'left': {
            this.anstext=this.answer=='Almost the same' ? 'Correct Answer' : 'Incorrect Answer';
             break;
          }
          case 'right': {
            this.anstext=this.answer=='Almost the Opposite' ? 'Correct Answer' : 'Incorrect Answer';
            break;
         } case 'down': {
          this.anstext=this.answer=='Totally Unrelated' ? 'Correct Answer' : 'Incorrect Answer';
          break;
          }
       }
       if(this.anstext=='Correct Answer'){
         //this.score=this.score+this.seconds;
         this.score++;
         this.totanswers.push(1);
       }
  }
  readData() {
    return this.firestore.collection('linkswipe').snapshotChanges().subscribe(data => {
      this.data = data.map(e => {
        return {
          id: e.payload.doc.data()['id'],
          isEdit: false,
          word1: e.payload.doc.data()['word1'],
          word2: e.payload.doc.data()['word2'],
          relation: e.payload.doc.data()['relation'],
          difficulty: e.payload.doc.data()['difficulty'],
        };
      })

    });

}
}
