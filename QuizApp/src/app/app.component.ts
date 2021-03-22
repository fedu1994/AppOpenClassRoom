import { Component } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuizApp';

  posts:Post[] =[
    {title: 'Morning',content: 'good morning every one',loveIts: 1,created_at: new Date()},
    {title: 'Test',content: 'we need some one to past a test',loveIts: -2,created_at: new Date()},
    {title: 'Help',content: 'can enyone help me',loveIts: 4,created_at: new Date()},
    {title: 'Frindship',content: 'hello friends!!',loveIts: 0,created_at: new Date()}
  ]
}
