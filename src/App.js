
import TodoContextProvider from "./Contexts/TodoContext";
import Navbar from './Components/Navbar'
import Tasklist from "./Components/Tasklist";
import NewTaskForm from './Components/NewTaskForm'
import styled from "styled-components";
function App() {
  const Main = styled.div`
  background: #022f58;
  margin: 20px auto;
  width: 90%;
  max-width: 700px;
  color: #eee;
  border-radius: 15px;
  /* From https://css.glass */
background: rgba(255, 255, 255, 0.27);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6.6px);
-webkit-backdrop-filter: blur(6.6px);
  /* background-color: ; */
  
  `
  return (
   
    <Main >
    <TodoContextProvider>
        <Navbar/>
         <NewTaskForm/> 
          <Tasklist/>
    </TodoContextProvider>
    </Main>
 
  );
}

export default App;
