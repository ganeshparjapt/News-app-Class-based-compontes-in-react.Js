import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class news extends Component {
  constructor() {
    super();
    console.log("i am a news constraecter for news.js");
    this.state = {
      articles: [],
      loading: false,
      page: 1,

    };
  }
  async componentDidMount() {
    console.log("did mount");
    let url ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f8264201c0a04e829cc23fb70753cd26&pageSize=20";
    let data = await fetch(url);
    let parseDate = await data.json();
    this.setState({ articles: parseDate.articles,totalResults: parseDate.totalResults });
  }
  handlePreviewClick = async() => {
    console.log("click preview");
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f8264201c0a04e829cc23fb70753cd26&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parseDate = await data.json();
  
    this.setState({
      page: this.state.page - 1,
      articles: parseDate.articles
    })
  };
  handleNextClick = async() => {
    console.log("click next");
    if( this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
      let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f8264201c0a04e829cc23fb70753cd26&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parseDate = await data.json();
    
      this.setState({
        page: this.state.page + 1,
        articles: parseDate.articles
      })

    }
   
  };


  render() {
    console.log("did ");

    return (
      <div className="container my-3">
        <h3>News Monkey Headlings today</h3>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  descc={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-3"
            onClick={this.handlePreviewClick}
          >
            &larr; Preview
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            next news &rarr;
          </button>
        </div>
      </div>
    );
  }
}
