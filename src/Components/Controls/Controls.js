import {ControlsWrapper,
        CategoryBtn,
        SortBtn,
        AddBtn,
} from './Controls.styled'
import SortIcon from '../../Icons/Sort/SortIcon';
import { useState } from 'react';

const Controls = () => {
    const [sortOpen, setSortOpen] = useState(false);

    const handleSortOpen = () => {
        setSortOpen(true)
    }

    return (
        <ControlsWrapper>
            <CategoryBtn type="button"></CategoryBtn>
            <SortBtn type='button' onClick={handleSortOpen}><SortIcon sortOpen={sortOpen}/></SortBtn>
            <AddBtn to='/add'>Add</AddBtn>   
        </ControlsWrapper>
    )
};

export default Controls;