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
//para poder extender el css de un componente a otro utilizo () y le paso el componente que quiero extender
const BlockButton = styled(Button)`
  width:100%;
  font-size:24px
`

function App() {
  return (
    <Content>
      <P>Hola soy un parrafo</P>
      <Button>Enviar </Button>
      <Button primary={"hola"}>Enviar </Button><br/><br/>
      <BlockButton primary={"hola"}>Enviar </BlockButton>
    </Content>
    
  );
}

export default App;
