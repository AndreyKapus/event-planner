import { CategoryBtn } from './FilterButton.styled';
import {Dropdown,
        DropList,
        DropListItem,
        BtnContent,
        Wrapper,
        Container,
        DropListText,
        BtnContentText,
} from './FilterButton.styled.js'

const FilterIcon = ({toggleFilterOpen, isFilterOpen}) => {

    return (<Container>
            <Wrapper>
                <CategoryBtn id='filter' type="button" onClick={toggleFilterOpen} isOpen={isFilterOpen}>
                            <BtnContent>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4L9 12V18L15 21V12L20 4H4Z" stroke="#7B61FF"/>
                                </svg>
                                <BtnContentText isFilterOpen={isFilterOpen}>Category</BtnContentText>
                            </BtnContent> 
                </CategoryBtn>
                <Dropdown isOpen={isFilterOpen}>
                    <DropList>
                        <DropListItem>
                            <DropListText>Art</DropListText>                           
                        </DropListItem>
                        <DropListItem>
                            <DropListText>Music</DropListText>                            
                        </DropListItem>           
                        <DropListItem>
                            <DropListText>Business</DropListText>                 
                        </DropListItem>
                        <DropListItem>
                            <DropListText>Conference</DropListText>                     
                        </DropListItem>
                        <DropListItem>
                            <DropListText>Workshop</DropListText>                      
                        </DropListItem>
                        <DropListItem>
                            <DropListText>Sport</DropListText>
                        </DropListItem>
                    </DropList>
                </Dropdown>
            </Wrapper>
            </Container>
    )
};

export default FilterIcon