import { useState } from "react";
import { PriorityDropWrapper, PriorityList, PriorityListItem } from "./CreateEvent.styled";
import { FormLabel, FormInput } from "./CreateEvent.styled";

const PriorityDrop = ({setPriority, handleChange}) => {
    const [priorityInputOnFocus, setPriorityInputOnFocus] = useState(false);
    const [selectedPriority, setSelectedPriority] = useState('Select priority');

    const options = ['Low', 'Medium', 'High'];

    const handlePriorityInputChange = (option) => {
        setPriority(option);
        setSelectedPriority(option);
        setPriorityInputOnFocus(false);
    };
    
    return (
        <div>
            <FormLabel htmlFor='priority'>Priority</FormLabel>  
                <FormInput type='text' 
                    readOnly
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
                                handlePriorityInputChange(option)
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