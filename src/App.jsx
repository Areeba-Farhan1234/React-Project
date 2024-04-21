import Comp2 from './Component/Comp2';
import Hooks from './Component/Hooks';
import JavascriptComp from './Component/JavascriptComp';
import MyComp from './Component/MyComp';
function App() {
 const  num = 25;
 const  fruit = "Mango";
 const  car = "Carola";
return(
  <>
    <h1>Hello World!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem similique dolor vel nisi incidunt maiores eius vitae soluta eum! Possimus iusto corporis ab necessitatibus ipsum totam aperiam fugit perferendis.</p>
    <img src="https://media.istockphoto.com/id/113494458/photo/fire-isolated-over-black-background.jpg?s=612x612&w=0&k=20&c=u6STGsSpJAyBN8kDeqnVUla4-0SnLpdaTsehFsey2p0=" alt="" />

    <MyComp  number = {num} fruit = {fruit}/>
    <Comp2 number = {num} fruit = {fruit} car = {car}/>
    <br/>
    <br/>
   <JavascriptComp/>
   <Hooks/>
  </>
)
}

export default App;