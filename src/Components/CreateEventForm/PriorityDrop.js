import { PriorityDropWrapper, PriorityList, PriorityListItem } from "./CreateEvent.styled";

const PriorityDrop = ({openDropDown, selectedPriority, setSelectedPriority}) => {
    return (
        <>
            {openDropDown && 
             <PriorityDropWrapper>
                <PriorityList>
                    <PriorityListItem>Low</PriorityListItem>
                    <PriorityListItem>Medium</PriorityListItem>
                    <PriorityListItem>High</PriorityListItem>
                </PriorityList>
            </PriorityDropWrapper>}
        </>

    )
};

export default PriorityDrop;