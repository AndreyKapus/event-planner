import { useState } from "react";
import { PriorityDropWrapper, PriorityList, PriorityListItem } from "./CreateEvent.styled";
import { FormLabel, FormInput } from "./CreateEvent.styled";

const PriorityDrop = ({priority, setPriority, handleChange}) => {
    const [priorityInputOnFocus, setPriorityInputOnFocus] = useState(false);
    const [selectedPriority, setSelectedPriority] = useState('Select priority');

    const options = ['Low', 'Medium', 'High'];
    
    return (
        <div>
            <FormLabel htmlFor='priority'>Priority</FormLabel>  
                <FormInput type='text' 
                    value={selectedPriority}
                    autoComplete="off"
                    name="priority" 
                    id="priority" 
                    onClick={() => setPriorityInputOnFocus(!priorityInputOnFocus)}
                    onChange={() => handleChange()} 
                />  
                    
            {priorityInputOnFocus && 
                <PriorityDropWrapper>
                    <PriorityList>
                        {options.map((option) => (
                            <PriorityListItem key={option} onClick={(e) => {
                                setPriority(option)
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