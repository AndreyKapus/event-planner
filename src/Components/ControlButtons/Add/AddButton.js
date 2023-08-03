import { AddBtn } from "../../Controls/Controls.styled";

const AddButton = () => {
    return (
        <>
            <AddBtn to='/add'>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 4V20M4.5 12L20.5 12" stroke="white"/>
                </svg>
            </AddBtn> 
        </>
    )
};

export default AddButton;