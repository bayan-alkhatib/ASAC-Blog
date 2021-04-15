'use strict';

let form=document.getElementById('form');
let article=document.getElementById('article');
let totalArticles;

function Articledata(authorName,articleTitle,subject,content,day,month,year){
  this.authorName=authorName;
  this.articleTitle=articleTitle;
  this.subject=subject;
  this.content=content;
  this.day=day;
  this.month=month;
  this.year=year;
  this.id=0;
  this.likes=0;
  Articledata.articlesArr.push(this);
}

Articledata.articlesArr=[];

if(JSON.parse(localStorage.getItem('articlesData'))){
  Articledata.articlesArr=JSON.parse(localStorage.getItem('articlesData'));
}

Articledata.prototype.randomlikes=function(){
  this.likes= Math.floor(Math.random() * (500 - 1) + 1);
};

form.addEventListener('submit',articleForm);

function articleForm(event){
  event.preventDefault();
  let newArticle=new Articledata(event.target.authorName.value,event.target.articleTitle.value,event.target.subject.value,event.target.content.value,event.target.day.value,event.target.month.value,event.target.year.value);
  newArticle.id=Articledata.articlesArr.length;
  newArticle.randomlikes();
  totalArticles=Articledata.articlesArr[Articledata.articlesArr.length-1].id;
  localStorage.setItem('articlesData',JSON.stringify( Articledata.articlesArr));
  displayArticles();
}

function displayArticles(){
  article.innerHTML=' ';
  for(let i=0;i<Articledata.articlesArr.length;i++){
    let list=document.createElement('ul');
    article.appendChild(list);
    let total=document.createElement('li');
    list.appendChild(total);
    total.textContent='Total Articles: '+totalArticles;
    let articleId=document.createElement('li');
    list.appendChild(articleId);
    articleId.textContent='Article ID: '+ Articledata.articlesArr[i].id;
    let articletitle=document.createElement('li');
    list.appendChild(articletitle);
    articletitle.textContent=Articledata.articlesArr[i].articleTitle;
    let image=document.createElement('li');
    list.appendChild(image);
    let img=document.createElement('img');
    image.appendChild(img);
    img.src='./img/asac_ltuc.jpg';
    let authorName=document.createElement('li');
    list.appendChild(authorName);
    authorName.textContent='Author: '+Articledata.articlesArr[i].authorName;
    let date=document.createElement('li');
    list.appendChild(date);
    date.textContent='Date:'+ Articledata.articlesArr[i].day+'-'+Articledata.articlesArr[i].month+'-'+Articledata.articlesArr[i].year;
    let likes=document.createElement('li');
    list.appendChild(likes);
    likes.textContent=Articledata.articlesArr[i].likes+' likes';
    likes.id='likes';
    let subject=document.createElement('li');
    list.appendChild(subject);
    subject.textContent=Articledata.articlesArr[i].subject;
    subject.id='subject';
    let content=document.createElement('li');
    list.appendChild(content);
    content.innerHTML='<p>'+Articledata.articlesArr[i].content+'</p>';
  }
}
