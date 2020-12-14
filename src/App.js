import {useContext} from 'react'
import './App.css';
import BottomNav from './components/nav/buttom-nav'
import Nav from './components/nav/nav'
import Posts from './components/Posts/Main'
import Message from './components/Message/Main'
import Profile from './components/Profile/Profile'
import { AuthContext } from './components/ContextApi/Context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const respNav = (width) =>{
  if(width<720){
    return <BottomNav />
  } else{
    return <Nav />
  }
}
function App() {
  const [user,setUser] = useContext(AuthContext)
  // const [width, setWidth] = useState(window.innerWidth)
  // window.addEventListener("resize", ()=>{
  //   setWidth(window.innerWidth)
  // });
  return (
   <div className="div">
     {/* {respNav(width)} */}
     <Router>
     <Nav />
       <Switch>
         <Route path="/" exact component={Posts} /> 
         <Route path="/chat" exact component={Message} />
         <Route path="/profile" exact component={Profile}> 
         </Route>
       </Switch>
     </Router>
     {/* <Posts /> */}
     {/* <Profile /> */}
     

    {/* <Message /> */}
      
   </div>
  );
}

export default App;
