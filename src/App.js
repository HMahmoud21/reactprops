
import './App.css';
import Profile from './Profile/Profile';

function App() {
const fullName = "Mohamed"
const bio = "Mohamed"
const myImage = "https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
 function handelname(myName){
    alert( `the full name is ${myName}`)
}

  return (
    <div>
     <Profile fullName={fullName} bio={bio} handelname={handelname}>{myImage}</Profile>
    </div>

  );
}
Profile.defaultProps = {
  fullName: "R",
  bio: "aa",
  profession: "bb "
}

export default App;
