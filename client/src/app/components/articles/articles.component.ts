import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from '../../models/Article';
import { ArticleService } from './../../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  title: string = "Articles";
  minDate = new Date();
  article: Article = {
    id: null,
    pubDate: null,
    title: '',
    author: '',
    img: '',
    content: '',
    isActive: null,
    isUpcoming: null,
    loaded: null
  };
  articles: Article[];
  loaded: boolean = true;
  enableAdd: boolean = false;
  showArticleForm: boolean = false;
  
  @ViewChild('articleForm') form: any;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

  onSubmit({ value, valid }: { value: Article; valid: boolean }) {
    if (!valid) {
      console.log('Article Form is not Valid');
    } else {
      value.isActive = true;
      this.articleService.addArticle(value);
      this.form.reset();
      this.showArticleForm = false;
    }
  }

}



  

  


