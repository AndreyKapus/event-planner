import { useState } from 'react';
import {CategoryBtn,
} from '../../Components/Controls/Controls.styled.js'

const FilterIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSortOpen = () => {
        !isOpen ? setIsOpen(true) : setIsOpen(false)
    }

    return (
            <div>
                <CategoryBtn type="button" onClick={toggleSortOpen}>
                    {isOpen ? 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L9 12V18L15 21V12L20 4H4Z" stroke="#3F3F3F" />
                    </svg> : 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L9 12V18L15 21V12L20 4H4Z" stroke="#7B61FF"/>
                    </svg>}
                </CategoryBtn>
            </div>



    )
};

export default FilterIcon