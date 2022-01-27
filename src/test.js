import React from "react";
import "./test.css";
import PropTypes from "prop-types";

//1.Function component
//const Test = ({name = "vishwa pratap"}) => {
// return (
//     <h1>This is {name} </h1>
//    )
//};

//2.Class Component
//class Test extends Component {
//   name = this.props.name ?? "vishwa pratap";
//   render() {
//     return <h1>This is {this.name}</h1>  
//    }
//}

//class Test extends Component {
  //LoggedIn = true;
// render() {
//    return (
//      <div>
//      {this.LoggedIn ?(<h1>The user is logged in</h1>
//      ): (
//       <h1>The user is not logged in</h1>
//     )
//     }
      
//     </div>
//   );
//  }
//}

//class Number extends Component{
// a = 10;
//  render() {
//    return(
//     <div>
//        {this.a>5 ? (<h2>No is valid </h2>
//        ):(
//          <h2>No is invalid </h2>
//        )}
//      </div>
//    );
//  }
//}

//PROPS
//const Test = (props) =>{
//  props.name= "himanshu singh";
//  return (
//    <h1>This is{props.name}</h1>
//  )
//};

const Test = ({ user, setPhoneNumber }) => {
  return (
    <div>
      <h2>This is {user.name}</h2>
      <h1>
        {user.name}'s Phone Number is: {user.phoneNumber}. Hit them up!
      </h1>
      <button
        onClick={(e) => {
          console.log("Button clicked");
          setPhoneNumber("123456789");
        }}
      >
        Change Number
      </button>
    </div>
  );
};

Test.propTypes = {
  user: PropTypes.object.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
};

export default Test;