import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css']
})
export class ArticleReadComponent implements OnInit {
  Articles: any = [];
  loaded: boolean = false;
  hide: boolean = true;
  currentArticle = null;

  constructor(
    private articleService: ArticleService,
    private actRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getArticle(this.actRoute.snapshot.paramMap.get('id'));
    

  
  }

  // readArticle() {
  //   this.articleService.getArticles().subscribe((data) => {
  //     this.Articles = data;
  //     this.loaded = true;
  //   })    
  // }

  getArticle(id) {
    this.articleService.getArticle(id).subscribe(data => {
        this.currentArticle = data;
        console.log(data);
      },
      error => {
        console.log(error);
    });
  }



  // removeArticle(article, index) {
  //   if(window.confirm('Are you sure you want to delete article?')) {
  //       this.articleService.deleteArticle(article._id).subscribe((data) => {
  //         this.Articles.splice(index, 1);
  //       }
  //     )    
  //   }
  // }

}
