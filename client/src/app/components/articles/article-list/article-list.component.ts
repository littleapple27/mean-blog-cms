import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
  

export class ArticleListComponent implements OnInit {

  title: string = "Articles List"
  Articles: any = [];
  loaded: boolean = false;
  hide: boolean = true;

  constructor(private articleService: ArticleService) {
    this.readArticle();
  }

  ngOnInit(): void {
  }

  readArticle() {
    this.articleService.getArticles().subscribe((data) => {
      this.Articles = data;
      this.loaded = true;
    })    
  }

  removeArticle(article, index) {
    if(window.confirm('Are you sure you want to delete article?')) {
        this.articleService.deleteArticle(article._id).subscribe((data) => {
          this.Articles.splice(index, 1);
        }
      )    
    }
  }

}



  

  


