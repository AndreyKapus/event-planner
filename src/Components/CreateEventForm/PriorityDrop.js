import { useState } from "react";
import { PriorityDropWrapper, PriorityList, PriorityListItem } from "./CreateEvent.styled";
import { FormLabel, FormInput } from "./CreateEvent.styled";
import { useTranslation } from "react-i18next";
import { useLang } from "../../Store/LanguegeStore";
import { useEffect } from "react";

const PriorityDrop = ({setPriority, handleChange}) => {
    const [priorityInputOnFocus, setPriorityInputOnFocus] = useState(false);
    const [selectedPriority, setSelectedPriority] = useState('Select priority');

    const getLang = useLang((state) => state.lang);

    useEffect(() => {
        getLang === 'en' ? setSelectedPriority('Select priority') : setSelectedPriority('Оберіть пріорітет')
    }, [getLang])

    const {t} = useTranslation()

    const options = ['Low', 'Medium', 'High'];

    const handlePriorityInputChange = (option) => {
        setPriority(option);
        setSelectedPriority(option);
        setPriorityInputOnFocus(false);
    };
    
    return (
        <div>
            <FormLabel htmlFor='priority'>{t("create-event-priority")}</FormLabel>  
                <FormInput required type='text' 
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