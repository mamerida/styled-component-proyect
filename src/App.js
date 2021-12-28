import styled from "styled-components";

//creo el elemento utilizando los componentes de styles y agrego las propieades css
const P = styled.p`
  font-size:24px;
  color:red;

`

const Content = styled.div`
  padding:20px 25px;

`

//se crea renderizado condicional mediante los templade strings 
//en este caso en caos de existir la propiedad de primario pondra un boton u otro
const Button = styled.button`
  background-color : ${props => props.primary ? 'red' : 'white '};
  color: ${props => props.primary ? 'white' : 'red '};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius:4px;
`

function App() {
  return (
    <Content>
      <P>Hola soy un parrafo</P>
      <Button>Enviar </Button>
      <Button primary={"hola"}>Enviar </Button>
    </Content>
    
  );
}

export default App;
