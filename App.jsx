import styled from "styled-components"
import Navbar from "./Navbar"
import First from "./First"

const div = styled.div'
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  opacity: 0.7;


  &:hover {
    filter: brightness(0.85);
  }

'

const App = () => {
	return <div> <Navbar/> <First/> </div>
}	

export default App;
