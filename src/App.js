import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CocktailList from './components/CocktailList/CocktailList';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  const cocktails = [
    
      {
      imgSrc : "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
      name : "Apple Juice",
      price : "30 DT",
      desc : "Drink the feeling of the island, Enjoy The Drink !"

      },
      {
        imgSrc : "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
        name : "Orange Juice",
        price : `22 DT`,
        desc : "rich in vitamin C , Drink The pleasure !"
        },
      
      {
      imgSrc : "https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg",
      name : "Coco",
      price : "32 DT",
      desc : "we brought the island flavors for you, Enjoy The Drink !"

      }
  ]
  
  return (
    <div className="App">
      <NavBar/>
      <h1 className="mt-5">Welcome To The Party</h1>
      <CocktailList cocktails={cocktails}/>
      <Footer>
        <p>&copy; All Rigths Reserved To Me 2021</p>
      </Footer>
    </div>
  );
}

export default App;
