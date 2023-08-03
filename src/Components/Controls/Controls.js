import {ControlsWrapper,
        AddBtn,
} from './Controls.styled'

import SortBtn from '../../Icons/Sort/SortBtn';
import FilterIcon from '../../Icons/Filter/FilterIcon';

const Controls = () => {

    return (
        <ControlsWrapper>
            <FilterIcon/>
            <SortBtn/>
            <AddBtn to='/add'>Add</AddBtn>   
        </ControlsWrapper>
    )
};

export default Controls;