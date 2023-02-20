import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, discription } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://www.indy100.com/media-library/18-years-of-satellite-imagery-shows-receding-of-thwaites-glacier.jpg?id=33056526&width=1200&height=600&coordinates=0%2C16%2C0%2C154" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <a href="/newsitem" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
