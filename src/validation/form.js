import * as Yup from "yup"


export default Yup.object().shape({
    name: Yup.string().
    required("Name is required.")
    .min(2,"Name must be atleast 2 characters long"),
    pizzaSize: Yup.string()
    .oneOf(['small', 'medium', 'large'])
    .required('Size is required'),
    pepperoni: Yup.boolean(),
    bacon: Yup.boolean(),
    onion: Yup.boolean(),
    pineapple: Yup.boolean(),
    special: Yup.string()
})
