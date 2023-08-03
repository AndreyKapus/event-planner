import {ControlsWrapper,
        Container,
} from './Controls.styled'

import SortBtn from '../ControlButtons/Sort/SortBtn';
import FilterIcon from '../ControlButtons/Filter/FilterIcon';
import AddButton from '../ControlButtons/Add/AddButton';

const Controls = () => {

    return (
        <Container>
            <ControlsWrapper>
                <FilterIcon/>
                    <SortBtn/>
                <AddButton/>
            </ControlsWrapper>
        </Container>
    )
};

export default Controls;