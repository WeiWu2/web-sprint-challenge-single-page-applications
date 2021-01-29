import React, {useState, useEffect} from "react";
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
const initialDisabled = true
const App = () => {


  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 
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
    axios.post('https://reqres.in/api/users', newPizza)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {console.log(err)})
    setFormValues(initialFormValues);
  }
  
  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
    })
  }, [formValues])
  
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
        <Pizza formValues={formValues} change={change} submit={submit}  disabled={disabled} errors={formErrors}/>
      </Route>
      <Route path="/">
      </Route>
      </Switch>
    </>
  );
};
export default App;
