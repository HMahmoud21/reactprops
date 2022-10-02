import React from 'react'
import PropTypes from "prop-types";

  function Profile( props) {
    console.log(props);
    const styleobj={color:"red"} 
  return (
      <div style={styleobj}>
      <h1 className="App-title"> Full name  : {props.fullName} </h1>
      <h1>  Bio : {props.bio}</h1>
      <h1> Profession : {props.profession}</h1>
      <img  width={70} height={70} src ={props.children} alt ="photo de profile"/>
      <form >
      <button onClick={props.handelname(props.fullName)}>Click on me </button>
    </form>

    </div>
  )
}
Profile.propTypes = {
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,

}


    




export default Profile;