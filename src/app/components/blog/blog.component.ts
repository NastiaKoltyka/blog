import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Article } from 'src/app/models/article';


import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() login: string;
  articles: Article[];
  status:boolean;
  title: string;
  description: string;
  visibleEdit: boolean;
  visibleModal:boolean;
  index: number;
  constructor(private articlesService: ArticleService) {
    this.articles = articlesService.articles;
    this.status=false
    this.title = '';
    this.description = '';
    this.visibleEdit = false;
    this.index = 0;
    this.login = '';
    this.visibleModal=false;
  }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.status=true
      if (!this.visibleEdit) {
        this.articlesService.addArticle(form.value.title, form.value.description);
      }
      else {
        this.articlesService.editArticle(this.index, form.value.title, form.value.description);
        this.visibleEdit = false;
      }
      this.articles = this.articlesService.articles;
      form.reset();
    }
  }
  edit(index: number): void {
    this.title = this.articles[index].title;
    this.description = this.articles[index].description;
    this.visibleEdit = true;
    this.index = index;
  }
  modal(){
    this.visibleModal=true;
  }
  delete(index: number): void {
    this.articlesService.deleteArticle(index);
    this.articles = this.articlesService.articles;
  }
  deleteAll(): void {
    this.articlesService.deleteAll();
    this.articles = this.articlesService.articles;
    this.visibleModal=false;
  }
  closeWindow(){
    this.visibleModal=false;
  }
}
