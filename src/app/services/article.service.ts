import { Injectable } from '@angular/core';
import{Article} from '../models/article'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[];
  constructor() { 
    if(localStorage.getItem('articles')){
      this.articles=JSON.parse(localStorage.getItem('articles')as string)
    }
    else{
      this.articles = [
        new Article('Food', 'This food is good', new Date(2021,5,21,14,35)),
        new Article('Weather', 'The weather is fine today', new Date(2021,6,19,14,35)),
      ];
      localStorage.setItem('articles',JSON.stringify(this.articles));
    }
    
  }
  addArticle(title:string,description:string):void{
    this.articles.unshift(new Article(title, description, new Date));
    localStorage.setItem('articles',JSON.stringify(this.articles));
  }

  editArticle(index:number,editTitle:string,editDescription:string){
    this.articles[index].title=editTitle;
    this.articles[index].description=editDescription;
    localStorage.setItem('articles',JSON.stringify(this.articles));
  }
  deleteArticle(index:number):void{
    this.articles.splice(index,1);
    localStorage.setItem('articles',JSON.stringify(this.articles));
  }
  deleteAll():void{
    this.articles=[];
    localStorage.removeItem('articles')
  }
}
