import { useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Donations from './Components/Donations/Donations'

function App() {
  
  const [inputCategory, setInputCategory] = useState("");

  //console.log(inputCategory);
  const handleCategoryChange = (category) => {
    setInputCategory(category);
  };

  return (
    <>
      <Banner onCategoryChange={handleCategoryChange}>
      </Banner>
      <Donations inputCategory={inputCategory}></Donations>
    </>
  )
}

export default App
