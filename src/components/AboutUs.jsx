// import User from "./User";
import React from "react";
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>Th is is dp from Kolkata</h2>
//       <UserClass
//         name={"Achana Naga Durga Prasad frm class based component"}
//         location={"hyd"}
//       />

//     </div>
//   );
// };

// export default About;

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>Th is is dp from Kolkata</h2>{" "}
        <UserClass
          name={"Achana Naga Durga Prasad frm class based component"}
          location={"hyd"}
        />
      </div>
    );
  }
}
export default About;
