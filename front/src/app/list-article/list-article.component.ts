import { Component } from '@angular/core';
import { MainArticleComponent } from "../main-article/main-article.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-article',
  standalone: true,
  imports: [CommonModule, MainArticleComponent],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.scss'
})
export class ListArticleComponent {
  numbers = new Int16Array(3);
}
