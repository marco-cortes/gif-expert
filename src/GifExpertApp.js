import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const categories = ["Java"];

    const [categoriesList, setCategoriesList] = useState(categories);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategoriesList={setCategoriesList} categoriesList={categoriesList}/>
            <ol>
            {
                categoriesList.map((category) => {
                    return (
                        <GifGrid category={category} key={category}/>
                    )
                })
            }
            </ol>
        </div>
    );
}

export default GifExpertApp;