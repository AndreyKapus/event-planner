import {ControlsWrapper,
        Container,
} from './Controls.styled'

import SortBtn from '../ControlButtons/Sort/SortBtn';
import FilterIcon from '../ControlButtons/Filter/FilterIcon';
import AddButton from '../ControlButtons/Add/AddButton';
import { useState } from 'react';

const Controls = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
  

    const toggleOpen = (e) => {
        const buttonName = e.currentTarget.id;

        switch(buttonName) {
            case 'filter':
                !isFilterOpen ? setIsFilterOpen(true) : setIsFilterOpen(false);
                setIsSortOpen(false);
                break;
            case 'sort':
                !isSortOpen ? setIsSortOpen(true) : setIsSortOpen(false);
                setIsFilterOpen(false);
                break;
            default: return;
        }
    };

    return (
        <Container>
            <ControlsWrapper>
                <FilterIcon toggleFilterOpen={toggleOpen} isFilterOpen={isFilterOpen}/>
                <SortBtn toggleSortOpen={toggleOpen} isSortOpen={isSortOpen} isFilterOpen={isFilterOpen}/>
                <AddButton/>
            </ControlsWrapper>
        </Container>
    )
};

export default Controls;