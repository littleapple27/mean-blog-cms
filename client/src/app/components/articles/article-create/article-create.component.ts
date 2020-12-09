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
  defaultArticle: Article = {
  pubDate: Date.now(),
  leadTitle: 'Lead Post Title',
  author: 'Post Authur',
  leadContent_1: 'For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.',
  leadContent_2: 'It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn’t feel like a giant. I felt very, very small.',
  leadBQ: 'Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.',
  subTitle1: 'Space Ipsum 1',
  subContent1_1: 'We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.',
  subBQ_1: 'There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.',
  subContent1_2: 'As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore . . . and this is exploration at its greatest.',
  subTitle2: 'Space Ipsum 2',
  subContent2_1: 'Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman’s earth, if free men make it, will be truly round: a globe in practice, not in theory.',
  subContent2_2: 'There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning.',
  // img: String;
  imgCaption: 'We are all connected; To each other, biologically. To the earth, chemically. To the rest of the universe atomically.',
  }

//Froala Editor
public options: Object = {
  toolbarInline: true,
  toolbarVisibleWithoutSelection: true,
  pastePlain: true
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
  { }

  ngOnInit(): void {
    this.articleForm();
    this.getDefaultArticle();
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
    });  
  }
  
// Getter to access form control
get myForm(){
  return this.articleCreateForm.controls;
}
  
getDefaultArticle() {
  this.articleCreateForm.patchValue({
    pubDate: this.defaultArticle['pubDate'],
    leadTitle: this.defaultArticle['leadTitle'],
    author: this.defaultArticle['author'],
    leadContent_1: this.defaultArticle['leadContent_1'],
    leadContent_2: this.defaultArticle['leadContent_2'],
    leadBQ: this.defaultArticle['leadBQ'],
    subTitle1: this.defaultArticle['subTitle1'],
    subContent1_1: this.defaultArticle['subContent1_1'],
    subBQ_1: this.defaultArticle['subBQ_1'],
    subContent1_2: this.defaultArticle['subContent1_2'],
    subTitle2: this.defaultArticle['subTitle2'],
    subContent2_1: this.defaultArticle['subContent2_1'],
    subContent2_2: this.defaultArticle['subContent2_2'],
    imgCaption: this.defaultArticle['imgCaption'],
    
    });
    //   console.log();
    // },
    // error => {
    //   console.log(error);
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
        this.ngZone.run(() => this.router.navigateByUrl('portal/(mainView:articles)'))
      }, (error) => {
        console.log(error);
    });
  }
}

}

//TODO Need to work on image upload both component and html
//TODO drop down selection for Author based on registered users.
//TODO Froala Editor validation
//TODO Authentication for app using JWT, bycrypt
