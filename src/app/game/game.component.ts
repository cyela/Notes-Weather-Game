import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }
  status=false;
  count=3;
  arr=[{
    'id':1,
    'image':'img1.jpg',
    'status':'hide'

  },{
    'id':3,
    'image':'img3.jpg',
    'status':'hide'
  },{
    'id':4,
    'image':'img4.jpg',
    'status':'hide'
  },{
    'id':5,
    'image':'img5.jpg',
    'status':'hide'
  },{
    'id':2,
    'image':'img2.jpg',
    'status':'hide'
  },{
    'id':6,
    'image':'img6.jpg',
    'status':'hide'
  },{
    'id':7,
    'image':'img7.jpg',
    'status':'hide'
  },{
    'id':8,
    'image':'img8.jpg',
    'status':'hide'
  },{
    'id':9,
    'image':'img9.jpg',
    'status':'hide'
  },{
    'id':10,
    'image':'img10.jpg',
    'status':'hide'
  },{
    'id':11,
    'image':'img11.jpeg',
    'status':'hide'
  },{
    'id':12,
    'image':'img12.jpeg',
    'status':'hide'
  }];
  myList:any[]=[];
  checkarr=[
    {
      'id':1,
      'image':'img1.jpg'
  
    },
    {
      'id':2,
      'image':'img2.jpg'
    },
    {
      'id':3,
      'image':'img3.jpg'
    }

  ]
  ngOnInit() {
    this.shuffle();
    setInterval(()=>{
        if(this.count==0){
          this.Result();
          if(this.status){
            alert("You won")
          }else{
            alert("you loose\nClick ok to continue");
          }
         this.shuffle();
         this.count=3;
        }
    },600)
  }

  addToMyList(a){
    this.count--;
    this.myList.push(a);
    for(let i = this.arr.length; i--;) {
      if(this.arr[i].id == a.id){
        this.arr[i].status='show';
      }
  }
  }


  Result(){
      if(this.checkarr.length !== this.myList.length || this.myList.length==0){
         this.status=false;
      }else{
        let count=this.checkarr.length;
        for(let j=this.myList.length;j--;){
              for(let i = this.checkarr.length; i--;) {
                if(this.checkarr[i].id == this.myList[j].id){
                    count--;
                }
            }
          }
         
      if(count==0){
        this.status=true;
      }else{
        this.status=false;
      }
    }
  }

  shuffle() {
    let input = this.arr;
    for (let i = input.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
        input[randomIndex] = input[i]; 
        itemAtIndex.status='hide';
        input[i] = itemAtIndex;
    }
   this.arr=input;
}


}
