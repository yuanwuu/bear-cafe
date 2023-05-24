import React, { useState } from 'react';
import styles from './Drinkcustomization.module.css'

const DrinkCustomization = () => {
  const [drink, setDrink] = useState ('')
  const [size, setSize] = useState('');
  const [flavor, setFlavor] = useState([]);
  const [toppings, setToppings] = useState([]);


  const handleDrink = (event) => {
    setDrink(event.target.value)
  }

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleFlavorsChange = (event) => {
    // setFlavor(event.target.value);
    const selectedFlavor = Array.from(event.target.selectedOptions, (option) => option.value);
    setFlavor(selectedFlavor);
  };

  const handleToppingsChange = (event) => {
    const selectedToppings = Array.from(event.target.selectedOptions, (option) => option.value);
    setToppings(selectedToppings);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any desired action with the selected options
    console.log('Customized drink:', { size, flavor, toppings });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.DrinkCustomization}>
      <label>
        Drinks:
        <select value = {drink} onChange={handleDrink}>
          <option value="cold-brew">Cold Brew</option>
          <option value="drip">Drip</option>
        </select>
      </label>

      <label>
        Size:
        <select value={size} onChange={handleSizeChange}>
          <option value="small">12 fl oz</option>
          <option value="medium">16 fl oz</option>
          <option value="large">24 fl oz</option>
        </select>
      </label>

      <label>
        Flavors:
        <select multiple value={flavor} onChange={handleFlavorsChange}>
          <option value="hazelnut">Hazelnut</option>
          <option value="caramel">Caramel</option>
          <option value="chocolate">Chocolate</option>
          <option value="white-chocoloate">White Chocoloate</option>
        </select>
      </label>

      <label>
        Toppings:
        <select multiple value={toppings} onChange={handleToppingsChange}>
          <option value="whipped cream">Whipped Cream</option>
          <option value="caramel drizzle">Caramel Drizzle</option>
          <option value="chocolate syrup">Chocolate Syrup</option>
          <option value="sprinkles">Sprinkles</option>
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default DrinkCustomization;