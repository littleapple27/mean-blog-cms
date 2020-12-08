import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../services/article.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Article } from '../../../models/Article';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css']
})
export class ArticleReadComponent implements OnInit {
  public loaded: boolean = false;
  public hide: boolean = true;
  currentArticle = null;
  submitted = false;
  articleEditForm: FormGroup;
  articleData: Article[];
  hideForm: boolean = false;
  leadTitle: string;  

  //Froala Editor
public options: Object = {
  toolbarInline: true,
  toolbarVisibleWithoutSelection: true,
  pastePlain: true
}


  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private actRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
  
    //for updating the article
    this.updateArticle();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getArticle(id);
    this.articleEditForm = this.fb.group({
      pubDate: ['', [Validators.required]],
      leadTitle: ['', [Validators.required]],
      author: ['', [Validators.required]],
      leadContent_1: ['', [Validators.required]],
      leadContent_2: ['', [Validators.required]],
      leadBQ: ['', [Validators.required]],
      subTitle1: ['', [Validators.required]],
      subContent1_1: ['', [Validators.required]],
      subBQ_1: ['', [Validators.required]],
      subContent1_2: ['', [Validators.required]],
      subTitle2: ['', [Validators.required]],
      subContent2_1: ['', [Validators.required]],
      subContent2_2: ['', [Validators.required]],
      imgCaption: ['', [Validators.required]],
    })
  }

  getArticle(id) {
    this.articleService.getArticle(id).subscribe(data => {
      this.currentArticle = data;
      this.articleEditForm.setValue({
        pubDate: data['pubDate'],
        leadTitle: data['leadTitle'],
        author: data['author'],
        leadContent_1: data['leadContent_1'],
        leadContent_2: data['leadContent_2'],
        leadBQ: data['leadBQ'],
        subTitle1: data['subTitle1'],
        subContent1_1: data['subContent1_1'],
        subBQ_1: data['subBQ_1'],
        subContent1_2: data['subContent1_2'],
        subTitle2: data['subTitle2'],
        subContent2_1: data['subContent2_1'],
        subContent2_2: data['subContent2_2'],
        imgCaption: data['imgCaption'],
      });
        console.log(data);
      },
      error => {
        console.log(error);
    });
  }

  // Getter to access form control
  get myForm() {
    return this.articleEditForm.controls;
  }

  updateArticle() {
    this.articleEditForm = this.fb.group({
        pubDate: ['', [Validators.required]],
        leadTitle: ['', [Validators.required]],
        author: ['', [Validators.required]],
        leadContent_1: ['', [Validators.required]],
        leadContent_2: ['', [Validators.required]],
        leadBQ: ['', [Validators.required]],
        subTitle1: ['', [Validators.required]],
        subContent1_1: ['', [Validators.required]],
        subBQ_1: ['', [Validators.required]],
        subContent1_2: ['', [Validators.required]],
        subTitle2: ['', [Validators.required]],
        subContent2_1: ['', [Validators.required]],
        subContent2_2: ['', [Validators.required]],
        // img: ['', [Validators.required]],
        imgCaption: ['', [Validators.required]],
      })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.articleEditForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure you want to update article?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.articleService.updateArticle(id, this.articleEditForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('portal/(mainView:articles)')
            alert('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

  
}
