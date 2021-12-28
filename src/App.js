import styled from "styled-components";

//creo el elemento utilizando los componentes de styles y agrego las propieades css
const P = styled.p`
  font-size:24px;
  color:red;

`

function App() {
  return (
    <div>
      <P>Hola soy un parrafo</P>
    </div>
  );
}

export default App;
