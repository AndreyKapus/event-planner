import { useState } from "react";
import { PriorityDropWrapper, PriorityList, PriorityListItem } from "./CreateEvent.styled";
import { FormLabel, FormInput } from "./CreateEvent.styled";

const PriorityDrop = (handleChange) => {
    const [priorityInputOnFocus, setPriorityInputOnFocus] = useState(false);
    const [selectedPriority, setSelectedPriority] = useState('Select priority');

    const options = ['Low', 'Medium', 'High'];
    
    return (
        <div>
            <FormLabel htmlFor='priority'>Priority</FormLabel>  
                <FormInput type='text' 
                    placeholder={selectedPriority}
                    autoComplete="off"
                    name="priority" 
                    id="priority" 
                    onChange={handleChange} 
                    onClick={() => setPriorityInputOnFocus(!priorityInputOnFocus)}/>  
                    

            {priorityInputOnFocus && 
                <PriorityDropWrapper>
                    <PriorityList>
                        {options.map((option) => (
                            <PriorityListItem onClick={(e) => {
                                setSelectedPriority(option)
                                setPriorityInputOnFocus(false)
                                }}>
                                {option}
                            </PriorityListItem>
                    ))}
                </PriorityList>
            </PriorityDropWrapper>}
        </div>
    )
};

export default PriorityDrop;