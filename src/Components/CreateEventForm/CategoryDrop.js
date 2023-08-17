import { useState } from "react";
import { PriorityDropWrapper, PriorityList, PriorityListItem } from "./CreateEvent.styled";
import { FormLabel, FormInput } from "./CreateEvent.styled";

const CategoryDrop = ({setCategory, handleChange}) => {
    const [categoryInputOnFocus, setCategoryInputOnFocus] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Select category');

    const options = ['Business', 'Sport', 'Music', 'Study'];
    
    return (
        <div>
            <FormLabel htmlFor='priority'>Category</FormLabel>  
                <FormInput type='text' 
                    value={selectedCategory}
                    autoComplete="off"
                    name="priority" 
                    id="priority" 
                    onClick={() => setCategoryInputOnFocus(!categoryInputOnFocus)}
                    onChange={() => handleChange()} 
                />  
                    
            {categoryInputOnFocus && 
                <PriorityDropWrapper>
                    <PriorityList>
                        {options.map((option) => (
                            <PriorityListItem key={option} onClick={(e) => {
                                setCategory(option)
                                setSelectedCategory(option)
                                setCategoryInputOnFocus(false)
                                }}>
                                {option}
                            </PriorityListItem>
                    ))}
                </PriorityList>
            </PriorityDropWrapper>}
        </div>
    )
};

export default CategoryDrop;