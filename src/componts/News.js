import React, { Component } from "react";
import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class news extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
 capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    super(props);
    console.log("i am a news constraecter for news.js");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `NewsMonkey-${this.capitalizeFirstLetter(this.props.category)}`;
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f8264201c0a04e829cc23fb70753cd26&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseDate = await data.json();
    this.setState({
      articles: parseDate.articles,
      totalResults: parseDate.totalResults,
    });

  }
  async componentDidMount() {
    console.log("did mount componet");
    this.updateNews();

   
  }
  handlePreviewClick = async () => {
    console.log("click preview");
   
    this.setState({page: this.state.page -1})
    this.updateNews();

  };
  handleNextClick = async () => {
    console.log("click next");
 
    this.setState({page: this.state.page +1})
    this.updateNews();

  };

  render() {
    console.log("did ");

    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px" }}>
          News Monkey Headlings today From -{this.capitalizeFirstLetter(this.props.category)}
        </h1>
        {/* {<Spinner />} */}

        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  descc={
                    element.description === null
                      ? "Description not avable "
                      : element.description
                  }
                  imgUrl={
                    element.urlToImage === null
                      ? "https://images.pexels.com/photos/902194/pexels-photo-902194.jpeg?auto=compress&cs=tinysrgb&w=600"
                      : element.urlToImage
                  }
                  newsUrl={element.url}
                  author={element.author === null ? "Unknow" : element.author}
                  date={element.publishedAt}
                  source={element.source.name}
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
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            onClick={this.handleNextClick}
          >
            next news &rarr;
          </button>
        </div>
      </div>
    );
  }
}
