import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, descc, imgUrl, newsUrl, author, date ,source} = this.props;
    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%' ,zIndex : "1"}}>
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{descc}...</p>
            <h6>
              Example heading <span className="badge bg-secondary">New</span>
            </h6>

            <a
              href={newsUrl}
              target="blank"
              rel="noreferrer"
              className="btn sm btn btn-dark"
            >
              Read...
            </a>
            <div className="card-footer text-muted">
              Author - {author} Public- {new Date(date).toGMTString()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
