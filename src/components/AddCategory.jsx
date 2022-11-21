import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) => {
       // console.log(event.target.value);
        setInputValue(event.target.value);
    }
    const onSumit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length <= 2) return;
        onNewCategory(inputValue);

       setInputValue('');
      }

    return (
        <>
          <form onSubmit={onSumit} >
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue} 
                onChange={onInputChange}
        />
         </form>

         </>
  )
}
