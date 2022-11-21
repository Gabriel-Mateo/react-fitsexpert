
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitGrid } from "./GitGrid";

export const GifExpertApp = () => {
const [categories, setCategories] = useState([ 'frut' ]);
    const onAddCategory = (newCategory) => {
       
            const category = newCategory.toUpperCase();
            if (categories.includes(category)) {
 
            alert(`La Categoria  ${category}  ya existe`);
            return;
        }
       
       // setCategories([category,...categories]);
         setCategories([category]);
    }

    return (
         <>
            <h1>GifExpertApp </h1>
            <AddCategory
                onNewCategory={onAddCategory}
          />
           {
                categories.map((category) => 
                    (
                     <GitGrid key={category} category={ category } />
                    )
                 )
            }
       </>
    )
  }
