import { Router } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../models/Article';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  //Froala Editor
  public optionsTitle: Object = {
    toolbarInline: true,
    toolbarVisibleWithoutSelection: true,
    placeholderText: 'Click to Add Post Title'
    //charCounterCount: true
  }

  public optionsAuthor: Object = {
    toolbarInline: true,
    toolbarVisibleWithoutSelection: true,
    placeholderText: 'Click to Add Author'
    //charCounterCount: true
  }

  public optionsContent: Object = {
    toolbarInline: true,
    toolbarVisibleWithoutSelection: true,
    placeholderText: 'Click to add content'
    //charCounterCount: true
  }

  public optionsBQ: Object = {
    toolbarInline: true,
    toolbarVisibleWithoutSelection: true,
    placeholderText: 'Click to add blockquote'
    //charCounterCount: true
  }

  public optionsImgCap: Object = {
    toolbarInline: true,
    toolbarVisibleWithoutSelection: true,
    placeholderText: 'Click to add image caption'
    //charCounterCount: true
  }




  submitted = false;
  articleCreateForm: FormGroup;
  showExtended: boolean = false;
  loaded: boolean = false;
  hide: boolean = true;
  showArticleCreateForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private articleService: ArticleService
  )
  { 
      this.articleForm();
  }

  ngOnInit(): void {
    
  }

  articleForm() {
    this.articleCreateForm = this.fb.group({
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
  
// Getter to access form control
get myForm(){
  return this.articleCreateForm.controls;
}


onSubmit() {
  this.submitted = true;
  //console.log("submit button has been clicked.");
  if (!this.articleCreateForm.valid) {
    return false;
  } else {
    this.articleService.createArticle(this.articleCreateForm.value).subscribe(
      (res) => {
        console.log('User successfully created!')
        this.ngZone.run(() => this.router.navigateByUrl('/articles'))
      }, (error) => {
        console.log(error);
    });
  }
}

}

//TODO Need to work on image upload both component and html
//TODO drop down selection for Author?