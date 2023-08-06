import { Component } from "react";

export class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
    };
    // console.log(this.props.name + "child constructor is called");
  }
  componentDidMount() {
    this.userLists();

    // Make an API calls once component renders first then it will load API call so that our application will be fast
    // console.log(this.props.name + "childs componentDidMount");
    // API call
  }
  async userLists() {
    const data = await fetch("https://api.github.com/users");
    const json = await data.json();
    this.setState({ userInfo: json });
    // console.log(json);
  }

  render() {
    const { userInfo } = this.state;
    // console.log(this.props.name + "child render called");
    return (
      <>
        <div className="userscard">
          {userInfo.map((item) => (
            <div key={item.id} className="usercardinfo">
             <div> <h4>Name : {item.login}</h4>
              <h6>Location : {item.type}</h6></div>
              <div><img src={item.avatar_url} /></div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
