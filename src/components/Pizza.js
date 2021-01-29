import React from "react";

export default function Pizza(props){
const {formValues, change, submit, disabled, errors} = props;

const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
}
const onSubmit = (evt) => {
    evt.preventDefault()
    submit();
}
return (
<div>
    <form onSubmit={onSubmit}>
    <div >
          {/* VALIDATION ERRORS */}
          <div>{errors.name}</div>
          <div>{errors.pizzaSize}</div>
      </div>
        {/* Name Input */}
        <label>
            Name
        <input name="name" value = {formValues.name} type="text"  onChange={onChange}></input>
        </label>

        {/* Pizza Size Dropdown */}
        <label>
          Pizza Size
          <select value={formValues.pizzaSize} name="pizzaSize"  onChange={onChange}>
            <option value="">- Select an size -</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

        {/* Toppings checklist */}
        <label>
        Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={formValues.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>
        Pineapple
          <input
            type="checkbox"
            name="pineapple"
            checked={formValues.pineapple}
            onChange={onChange}
          />
        </label>
        <label>
        Bacon
          <input
            type="checkbox"
            name="bacon"
            checked={formValues.bacon}
            onChange={onChange}
          />
        </label>
        <label>
        Onion
          <input
            type="checkbox"
            name="onion"
            checked={formValues.onion}
            onChange={onChange}
          />
        </label>
        {/* Special Instructions Input*/}
    <label>
        
            Special Instructions
        <input name="special" value = {formValues.special} type="text" onChange={onChange}></input>
        
        </label>

    <button id = "submit" disabled={disabled} >Add to Order</button>
    </form>
</div>
)
}