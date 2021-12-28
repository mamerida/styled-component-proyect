import styled, {keyframes}from "styled-components";

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
//para aplicar propiedades como hover es &:hover

//para agregar estilo segun el nombre de la clase seria &.<nombreDeLaClase>

//en caso de agregar solamente el .info por ejemplo lo que va a hacer es aplicar los estilos a los elementos que esten dentro de la etiqueta padre.
//bastnate util para generar una clase container e insertar todos los elementos dentro del mismo
const Button = styled.button`
  transition: box-shadow 0.2s ease;
  background-color : ${props => props.primary ? 'red' : 'white '};
  color: ${props => props.primary ? 'white' : 'red '};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius:4px;

  &:hover {
    box-shadow: 1px 2px 5px rgb(0,0,0,0.3);

  }

  &.secondary{
    background-color:blue;
    border: solid 2px blue;
    color:white;
  }
  .info{
    font-size:px;

  }
`
//para poder extender el css de un componente a otro utilizo () y le paso el componente que quiero extender
const BlockButton = styled(Button)`
  width:100%;
  font-size:24px
`

//como agregar estilos a componentes ya creados?
//es caso de querer complementar. Le pasamos el componente como parametro le damos el estilo necesario y reemplazamos 
//el componente en el returnd 
//SI O SI SACANDO LA PROPIEDAD DE CLASSNAME Y SACANDOLA AL COMPONENTE SI NO, NO FUNCIONA 

// para evitar problemas de rendimiento siempre definir los style component por afuera de los metodos de render 
const Link = ({ className, ...props}) =>{
  return <a className={className} {...props}></a>

}

const StyledLink = styled(Link)`
  color:blue;
`
//crear componentes sin necesidad de retornar compentes html y crearlo directamente con styled.
//puedo evaluar las propiedades dentro de la asignacion de propieades
const Input =styled.input.attrs(props => ({
  type:'text',
  color:props.color || 'red'
}))`
  font-size:20px;
  border: 1px solid red;
  color: ${ props=> props.color};

`
//creo el componente le paso el componente anterior para poder copiar sus propiedades y las reescribo 
const Password = styled(Input).attrs({
  type:'password'
})``
//para poder agregar animaciones utilizo keyframes indicando el inicio y el final junto con la accion a realizar 
const girar = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform : rotate(360deg);
  }
`

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`

function App() {
  return (
    <Content>
      <P>Hola soy un parrafo</P>
      <Button >Enviar <p className="info"> informacion</p> </Button>
      <Button className="secondary" >Enviar </Button>
      <Button primary={"hola"}>Enviar </Button><br/><br/>
      {/* al utilizar la palabra reservada as para poder comportarse de otra manera por ejemplo un link. menu de navegacion  a es de anchor */}
      <BlockButton primary={"hola"} as="a" href="#">Enviar </BlockButton>
      <BlockButton primary={"hola"}>Enviar </BlockButton>
      <Link className="juanito">LINK</Link>
      <StyledLink>Link con estilo</StyledLink><br/><br/>
      <Input color ="blue"/>
      <Password color ="blue"/>
      <br/>
      <Rotar>Estoy Girando</Rotar>
    </Content>
    
  );
}

export default App;
