import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class news extends Component {
  render() {
    return (
      <div className="container my-3">
        <h3>News Monkey Headlings today</h3>
        <div className="row my-3" >
          <div className="col-md-4">
            <NewsItem title="my title" discription="my discropation" />
          </div>
          <div className="col-md-4">
            <NewsItem title="my title" discription="my discropation" />
          </div>
          <div className="col-md-4">
            <NewsItem title="my title" discription="my discropation" />
          </div>
        </div>
      </div>
    );
  }
}
