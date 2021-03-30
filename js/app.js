'use strict';

let form=document.getElementById('form');
let article=document.getElementById('article');

function Articledata(autherName,articleTitle,subject,content,day,month,year){
  this.autherName=autherName;
  this.articleTitle=articleTitle;
  this.subject=subject;
  this.content=content;
  this.day=day;
  this.month=month;
  this.year=year;
  this.likes=0;
  this.id=0;
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
  for(let i=0;i<=Articledata.articlesArr.length;i++){
    new Articledata(event.target.autherName.value,event.target.articleTitle.value,event.target.subject.value,event.target.content.value,event.target.day.value,event.target.month.value,event.target.year.value);
    Articledata.articlesArr[i].id++;
    Articledata.articlesArr[i].randomlikes();
    console.log(Articledata.articlesArr);
    articleFun(i);
  }
  localStorage.setItem('articlesData',JSON.stringify( Articledata.articlesArr));
}
// articleForm();
function articleFun(i){
  form.innerHTML=' ';
  let articletitle=document.createElement('h2');
  article.appendChild(articletitle);
  articletitle.textContent=Articledata.articlesArr[i].articleTitle;
  let img=document.createElement('img');
  img.src='./img/asac_ltuc.jpg';
  article.appendChild(img);
  let autherName=document.createElement('h2');
  article.appendChild(autherName);
  autherName.textContent=Articledata.articlesArr[i].autherName;
  let date=document.createElement('h2');
  article.appendChild(date);
  autherName.textContent='Date:'+ Articledata.articlesArr[i].day+'-'+Articledata.articlesArr[i].month+'-'+Articledata.articlesArr[i].year;
  let likes=document.createElement('h2');
  article.appendChild(likes);
  likes.textContent=Articledata.articlesArr[i].likes;
  let subject=document.createElement('h2');
  article.appendChild(subject);
  subject.textContent=Articledata.articlesArr[i].subject;
  let content=document.createElement('p');
  article.appendChild(content);
  content.textContent=Articledata.articlesArr[i].content;
}
