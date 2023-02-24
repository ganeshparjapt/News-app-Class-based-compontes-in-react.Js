import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

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
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f8264201c0a04e829cc23fb70753cd26&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseDate = await data.json();
    this.setState({ articles: parseDate.articles,totalResults: parseDate.totalResults });
  }
  handlePreviewClick = async() => {
    console.log("click preview");
    let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f8264201c0a04e829cc23fb70753cd26&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseDate = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseDate.articles
    })
  };
  handleNextClick = async() => {
    console.log("click next");
    if( this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
      let url =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f8264201c0a04e829cc23fb70753cd26&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
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
        <h1 className="text-center">News Monkey Headlings today</h1>
        <Spinner />

        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                
                <NewsItem
                  title={element.title}
                  descc={element.description === null ? "Description not avable ": element.description}
                  imgUrl={element.urlToImage === null ? "https://images.pexels.com/photos/902194/pexels-photo-902194.jpeg?auto=compress&cs=tinysrgb&w=600":element.urlToImage}
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
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)}
            onClick={this.handleNextClick}
          >
            next news &rarr;
          </button>
        </div>
      </div>
    );
  }
}
