import React, {useState} from "react";
import { Route, Link, Switch } from "react-router-dom";
import Pizza from "./components/Pizza"
import * as Yup from "yup"
import axios from "axios"
import formSchema from "./validation/form"

const initialFormValues = {
  name:"",
  pizzaSize:"",
  special:"",
  pepperoni: false,
  pineapple: false,
  bacon: false,
  onion: false
}
const initialFormErrors = {
  name:"",
  pizzaSize:"",
}
const App = () => {



  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const change = (name, value) => {
    Yup.reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors,
      [name]: ''})
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }
  const submit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      pizzaSize: formValues.pizzaSize,
      special:formValues.special.trim(),
      // toppings:['pepperoni, pineapple, bacon, onion'].filter((topping) => {formValues[topping]})
    }
    postPizza(newPizza);
  }
  const postPizza = newPizza => {
    axios.post('https://reqres.in/', newPizza)
    .then((res) => {
      console.log(res.data)
    })
    setFormValues(initialFormValues);
  }
  return (
    <>
<header>
  <nav>
  <Link to="/">Home</Link>
  <Link to="/pizza">Pizza</Link>
  </nav>
  <h1>Lambda Eats</h1>
</header>
   
      <Switch>
      <Route path="/pizza">
        <Pizza formValues={formValues} change={change} submit={submit}/>
      </Route>
      <Route path="/">
      </Route>
      </Switch>
    </>
  );
};
export default App;
