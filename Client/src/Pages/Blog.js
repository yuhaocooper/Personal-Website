import React, { Component } from "react";
import Axios from "axios";
import ShowBlog from "../Components/ShowBlog";
import Spinner from "../Components/Spinner";
import Header from "../Components/Navbar";
import { Footer } from "../Components/Navbar";

export class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        ptitle: "",
        name: "",
        avtar: "",
        profileurl: "",
        link: "",
      },
      item: [],
      isloading: true,
      error: null
    };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yuhaocooper";

  componentDidMount() {
    Axios.get(this.mediumURL)

      .then((data) => {
        const avatar = data.data.feed.image;
        const profileLink = data.data.feed.link;
        const res = data.data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter(item => item.categories.length > 0);

        const title = data.data.feed.title;

        this.setState(
          (pre) => ({
            profile: {
              ...pre.profile,
              ptitle: title,
              profileurl: profileLink,
              avtar: avatar,

            },
            item: posts,
            isloading: false
          }),
        );
        console.log(data, res);
      })
      .catch((e) => {
        this.setState({ error: e.toJSON() })
        console.log(e);
      });
  }
  render() {
   
    let post

    if (this.state.item) {
      post = this.state.item.map((post, index) => (
        <ShowBlog key={index} {...post} {...this.state.profile} {...index} />
      ))
    }
    if (this.state.isloading) {
      post = <Spinner />
    }
    if (this.state.error) {
      let error = this.state.error.code ? this.state.error.code : this.state.error.name;
      let errorMsg = this.state.error.message;
      post = (
        <>
          <h2 className="red center1">{error}</h2>
          <p className="errorMessage center1">{errorMsg}</p>
        </>
      );
    }
    return (
      <div id='home-container'>
        <div>
          <Header></Header>
        </div>
        <div className="blogpost-container">
          <div className="title" style={{fontSize: '40px'}}>Medium Articles</div>
          {post}
        </div>
        <div>
            <Footer></Footer>
          </div>
      </div>
    );
  }
}

export default Blog;