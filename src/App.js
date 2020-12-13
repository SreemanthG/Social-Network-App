import './App.css';
import BottomNav from './components/nav/buttom-nav'
import Nav from './components/nav/nav'
import Container from '@material-ui/core/Container';
import ViewCard from './components/Posts/ViewCard'
import Message from './components/Message/Main'
const respNav = (width) =>{
  if(width<720){
    return <BottomNav />
  } else{
    return <Nav />
  }
}
function App() {

  // const [width, setWidth] = useState(window.innerWidth)
  // window.addEventListener("resize", ()=>{
  //   setWidth(window.innerWidth)
  // });
  return (
   <div className="div">
     {/* {respNav(width)} */}
     <Nav />
 
     {/* <Container maxWidth="sm">
  
     <ViewCard />
     <ViewCard />
     <ViewCard />
     <ViewCard />

      </Container> */}
    <Message />
      
   </div>
  );
}

export default App;
