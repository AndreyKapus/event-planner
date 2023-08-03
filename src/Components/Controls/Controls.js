import {ControlsWrapper,
} from './Controls.styled'

import SortBtn from '../../Icons/Sort/SortBtn';
import FilterIcon from '../../Icons/Filter/FilterIcon';
import AddButton from '../ControlButtons/Add/AddButton';

const Controls = () => {

    return (
        <ControlsWrapper>
            <FilterIcon/>
            <SortBtn/>
            <AddButton/>
        </ControlsWrapper>
    )
};

export default Controls;