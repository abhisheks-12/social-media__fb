import Feed from "./Feed/Feed";
import Header from "./Header/Header";
import Login from "./Login/Login";
import RightSidebar from "./RightSidebar/RightSidebar";
import Sidebar from "./Sidebar/Sidebar";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();

  console.log(user);
  return (
    <>
    {
      !user ? (<Login/>) : (
        <div className="App">
          <Header/>

          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <RightSidebar/>
          </div>
        
        </div>
      )
    }
    
    </>
  );
}

export default App;
