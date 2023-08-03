import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        login:"",
        avatar_url:"",
        location: "",
      }
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/durgaprasad1108");
    const json = await data.json();
    this.setState({
      userInfo:json
    })
  }
  componentDidUpdate(){
  
  }
  componentWillUnmount(){

  }

  render() {
    const {login, avatar_url}= this?.state?.userInfo;
    return (
      <div className="user-card">
        <img style={{width:"50px" , height:"50px", borderRadius:"50%"}} src={avatar_url} alt="" />
        <h3>Name :{login}</h3>
        <h4>Contact: @dp</h4>
      </div>
    );
  }
}
export default UserClass;
