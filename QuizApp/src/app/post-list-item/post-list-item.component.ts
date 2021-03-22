import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  constructor() { }
  @Input() postFinal:any 

  ngOnInit(): void {
  }
  removeLoveIt(){
    this.postFinal.loveIts --;
    console.log(this.postFinal.loveIts)

  }
  addLoveIt(){
    this.postFinal.loveIts ++;

  }

}
