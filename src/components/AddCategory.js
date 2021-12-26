import {useState} from 'react'

const AddCategory = ({categoriesList, setCategoriesList}) => {

    const [category, setCategory] = useState("");

    const addCategory = (e) => {
        e.preventDefault();
        if(category.trim().length > 2){
            setCategoriesList([category,...categoriesList]);
            setCategory("");
        }
    }

    return (
        <div>
            <form onSubmit={addCategory}>
                <input type="text" 
                onChange={(e)=>{setCategory(e.currentTarget.value)}}
                value={category}
                placeholder="Ingrese una busqueda :)"/>
            </form>
        </div>
    )
}

export default AddCategory;