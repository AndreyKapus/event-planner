import { NavLink } from "react-router-dom";
import {ControlsWrapper,
        CategoryBtn,
        SortBtn,
        AddBtn,
} from './Controls.styled'

const Controls = () => {
    return (
        <ControlsWrapper>
            <CategoryBtn type="button">Cat</CategoryBtn>
            <SortBtn>Sort</SortBtn>
            <AddBtn to='/add'>Add</AddBtn>   
        </ControlsWrapper>
    )
};

export default Controls;