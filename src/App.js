import './App.css';
import {Main} from './components/Main';
import {File,Container, ContainerCart, ContainerCartLabel, ContainerCartLabel1, ContainerData, 
  ContainerFavIcon,ContainerLabel, ContainerMailBox, SearchBar, SearchIcon, SearchInputBar, 
  ContainerVeg, ContainerCheckbox, ContainerMain, ContainerPrice, ContainerMenu, ContentLabel,
  FoodIcon, ContainerCartMain, ContainerFav, ContainerText} from './components/Md'


function App() {
  return (
    <File>
     
   <Container>
     <ContainerText>Mcdonald's</ContainerText>
     
    <ContainerMailBox>
     <SearchBar>
       <SearchIcon src="search-icon.svg"/><SearchInputBar placeholder="Enter Something!"/>
      </SearchBar>

      <ContainerVeg>
        <ContainerCheckbox type="checkbox"/><ContainerLabel>Veg Only!</ContainerLabel>
      </ContainerVeg>

      <ContainerFav>
        <ContainerFavIcon src="search-icon.svg"/><ContainerLabel>Favourite</ContainerLabel>
      </ContainerFav>
   
      </ContainerMailBox>
   </Container>
   
   <ContainerMain>
      <ContainerData>
      <ContentLabel>McSpicy paneer + American Cheese Supreme + McVeggie + Veg Maharaja + 3 Fries(L)</ContentLabel> 
        <ContainerPrice>857 Rs</ContainerPrice>
      <ContainerMenu>Stay home, stay safe & share a meal-McSpicy Paneer Burger + American Cheese Supreme Veg Burger + McVeggie Burger + Veg Maharaja Mac Burger + 3 Fries(L) </ContainerMenu>
      </ContainerData>
      <FoodIcon src="Burger.jpg"/>
    </ContainerMain>

    <ContainerMain>
      <ContentLabel>2 McVeggie + 2 American Cheese Supreme Veg + 2 Fries(L)</ContentLabel> 
        <ContainerPrice>628 Rs</ContainerPrice>
      <ContainerMenu>The combo of favourites! 2 McVeggie + 2 American Cheese Supreme Veg + 2 Fries(L)</ContainerMenu>
      <FoodIcon src="Burger.jpg"/>    
    </ContainerMain>  

    <ContainerMain>
      <ContentLabel>McSpicy Chicken + McNuggets 20 pcs + Fries(L) + Coke(M)</ContentLabel> 
        <ContainerPrice>819 Rs</ContainerPrice>
      <ContainerMenu>Enjoy your meal!! McSpicy Chicken + McNuggets 20 pcs + Fries(L) + Coke(M)</ContainerMenu>
      <FoodIcon src="Burger.jpg"/>
    </ContainerMain> 

    <ContainerCart>
      <ContainerCartLabel>Cart</ContainerCartLabel>
      <ContainerCartLabel1>2 items</ContainerCartLabel1>
      
      <ContainerCartMain>
      <ContentLabel>McSpicy Chicken + McNuggets 20 pcs + Fries(L) + Coke(M)</ContentLabel> 
        <ContainerPrice>819 Rs</ContainerPrice>
      <ContainerMenu>Enjoy your meal!! McSpicy Chicken + McNuggets 20 pcs + Fries(L) + Coke(M)</ContainerMenu>
      
      </ContainerCartMain> 
    
      <ContainerCartMain>
        <ContentLabel>McSpicy Chicken + McNuggets 20 pcs + Fries(L) + Coke(M)</ContentLabel> 
          <ContainerPrice>819 Rs</ContainerPrice>
        <ContainerMenu>Enjoy your meal!! McSpicy Chicken + McNuggets 20 pcs + Fries(L) + Coke(M)</ContainerMenu>
      
      </ContainerCartMain> 
    </ContainerCart>
    <Main></Main>
   </File>
  );
}

export default App;
