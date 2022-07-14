
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
