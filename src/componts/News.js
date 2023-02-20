import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class news extends Component {
  constructor(){
    super()
    console.log("i am a news constraecter for news.js")
    this.state = {
      "status": "ok",
      "totalResults": 37,
      "articles": [
      {
      "source": {
      "id": null,
      "name": "indy100"
      },
      "author": "Greg Evans",
      "title": "Scientists left troubled by discovery made beneath 'doomsday glacier' - indy100",
      "description": "Scientists have been left shocked and worried by a recent discovery made beneath the Thwaites Glacier in Antarctica, otherwise known as the 'doomsday glacier.'The huge amount of ice has been destablised and has been reduced by nearly nine miles since the 1990…",
      "url": "https://www.indy100.com/science-tech/doomsday-glacier-thwaites-climate-change-2659440085",
      "urlToImage": "https://www.indy100.com/media-library/18-years-of-satellite-imagery-shows-receding-of-thwaites-glacier.jpg?id=33056526&width=1200&height=600&coordinates=0%2C16%2C0%2C154",
      "publishedAt": "2023-02-20T07:52:54Z",
      "content": "Scientists have been left shocked and worried by a recent discovery made beneath the Thwaites Glacier in Antarctica, otherwise known as the 'doomsday glacier.'\r\nThe huge amount of ice has been destab… [+2823 chars]"
      },
      {
      "source": {
      "id": "the-washington-post",
      "name": "The Washington Post"
      },
      "author": "Ben Golliver",
      "title": "NBA All-Star Game: Jayson Tatum sets record on LeBron James' night - The Washington Post",
      "description": "As the Lakers star is feted for breaking the all-time scoring record, the Celtics standout sets a mark of his own at the NBA All-Star Game.",
      "url": "https://www.washingtonpost.com/sports/2023/02/19/nba-all-star-game-lebron-james-jayson-tatum/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TCEG3F3FSFHRZBKXONZHBPGFWE.jpg&w=1440",
      "publishedAt": "2023-02-20T06:43:15Z",
      "content": "Comment on this story\r\nSALT LAKE CITY Boston Celtics forward Jayson Tatum halted LeBron Jamess All-Star Game dynasty, but the NBAs 72nd midseason showcase still belonged to the Los Angeles Lakers sta… [+6161 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CNBC"
      },
      "author": "Sam Meredith",
      "title": "One year on, Russia's war in Ukraine ramps up fears over Europe's next security 'soft spot' - CNBC",
      "description": "Concerns over Russia's influence in the Western Balkans have intensified since the Kremlin's full-scale invasion of Ukraine.",
      "url": "https://www.cnbc.com/2023/02/20/russia-ukraine-war-stokes-security-fears-in-the-western-balkans.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107192504-1676021834258-gettyimages-1245824185-flm-kfor-rudare007.jpeg?v=1676875267&w=1920&h=1080",
      "publishedAt": "2023-02-20T06:41:07Z",
      "content": "NATO, which counts Albania, Montenegro and North Macedonia among its members, says it has observed cyberattacks, disinformation, intimidation and other destabilizing activities in the Western Balkans… [+7626 chars]"
      },
      {
      "source": {
      "id": "bloomberg",
      "name": "Bloomberg"
      },
      "author": null,
      "title": "Stock Market Today: Dow, S&P Live Updates for February 20, 2023 - Bloomberg",
      "description": null,
      "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=9cda964f-b0fb-11ed-adb5-76644f6b4b5a&url=L25ld3MvYXJ0aWNsZXMvMjAyMy0wMi0xOS9kb2xsYXItcmlzZXMtc3RvY2tzLWZhY2UtaGVhZHdpbmRzLWZyb20tZmVkLXJhdGVzLW1hcmtldHMtd3JhcA==",
      "urlToImage": null,
      "publishedAt": "2023-02-20T06:41:00Z",
      "content": "To continue, please click the box below to let us know you're not a robot."
      },
      {
      "source": {
      "id": null,
      "name": "CBS Sports"
      },
      "author": "",
      "title": "2023 NBA All-Star Game dubbed 'worst basketball game ever played' by Team LeBron coach Michael Malone - CBS Sports",
      "description": "Malone didn't mince words after the non-competitive exhibition, adding 'I don't know how you fix it'",
      "url": "https://www.cbssports.com/nba/news/2023-nba-all-star-game-dubbed-worst-basketball-game-ever-played-by-team-lebron-coach-michael-malone/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/02/20/f2c72d83-6a9e-4754-abf6-683e350ad5a0/thumbnail/1200x675/5a48a3c275532bae62a8c4bcc200bcda/021923-malonelebron.jpg",
      "publishedAt": "2023-02-20T06:02:00Z",
      "content": "G League call-up Mac McClung may have saved the dunk contest on Saturday night, but now it appears the NBA All-Star Game itself is in need of saving. Team Giannis defeated Team LeBron on Sunday, 184-… [+2612 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hollywood Reporter"
      },
      "author": "Kimberly Nordyke",
      "title": "John Oliver Blasts Fox News Channel After Court Filing Shows Hosts Didn’t Believe 2020 Election Fraud Claims - Hollywood Reporter",
      "description": "\"Wow, if I were a Fox viewer, I'd feel pretty betrayed by that. It's like finding out that Big Bird regularly texts Elmo, 'F*** them kids,' and Elmo agrees,\" the 'Last Week Tonight' host quipped.",
      "url": "https://www.hollywoodreporter.com/tv/tv-news/john-oliver-fox-news-channel-ourt-filings-2020-election-fraud-claims-1235330071/",
      "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2021/10/john-oliver_2-Oct-11-H-2021.jpg?w=1024",
      "publishedAt": "2023-02-20T04:54:08Z",
      "content": "John Oliver took Fox News Channel to the mat on Sunday night during the 10th-season premiere of Last Week Tonight.\r\nAt the top of his HBO talk show, which has been on hiatus since November, Oliver br… [+4392 chars]"
      }
      ]
  }
}
   
  render() {
    return (
      <div className="container my-3">
        <h3>News Monkey Headlings today</h3>
        <div className="row my-3" >
          <div className="col-md-4">
            <NewsItem title="my title" discription="my discropation" imgUrl ="https://www.indy100.com/media-library/18-years-of-satellite-imagery-shows-receding-of-thwaites-glacier.jpg?id=33056526&width=1200&height=600&coordinates=0%2C16%2C0%2C154" />
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