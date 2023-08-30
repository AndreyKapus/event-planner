import { useState } from "react";
import { PriorityDropWrapper, PriorityList, PriorityListItem } from "./CreateEvent.styled";
import { FormLabel, FormInput } from "./CreateEvent.styled";
import { useTranslation } from "react-i18next";
import { useLang } from "../../Store/LanguegeStore";
import { useEffect } from "react";

const CategoryDrop = ({setCategory, handleChange}) => {
    const [categoryInputOnFocus, setCategoryInputOnFocus] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Select category');

    const getLang = useLang((state) => state.lang);

    useEffect(() => {
        getLang === 'en' ? setSelectedCategory('Select category') : setSelectedCategory('Оберіть категорію')
    }, [getLang])

    const {t} = useTranslation();

    const options = ['Art', 'Music', 'Business', 'Conference', 'Workshop', 'Sport'];

    const handleCategoryInputChange = (option) => {
        setCategory(option)
        setSelectedCategory(option)
        setCategoryInputOnFocus(false)
    };
    
    return (
        <div>
            <FormLabel htmlFor='priority'>{t("create-event-category")}</FormLabel>  
                <FormInput type='text' 
                    readOnly
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
                                handleCategoryInputChange(option)
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