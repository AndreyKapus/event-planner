import { useState } from 'react';
import { CategoryBtn } from './FilterButton.styled';
import {Dropdown,
        DropList,
        DropListItem,
        BtnContent,
        Wrapper,
        Container,
        DropListText,
} from './FilterButton.styled.js'
import ArrowUpIcon from '../../../Icons/ArrowUp';
import ArrowDownIcon from '../../../Icons/ArrowDown';

const FilterIcon = ({toggleFilterOpen, isFilterOpen}) => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleSortOpen = () => {
    //     !isOpen ? setIsOpen(true) : setIsOpen(false)
    // };

    return (<Container>
            <Wrapper>
                <CategoryBtn id='filter' type="button" onClick={toggleFilterOpen} isOpen={isFilterOpen}>
                    {isFilterOpen ? 
                            <BtnContent>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4L9 12V18L15 21V12L20 4H4Z" stroke="#7B61FF"/>
                                </svg>
                                <p>Category</p>
                            </BtnContent> : 
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4L9 12V18L15 21V12L20 4H4Z" stroke="#3F3F3F" />
                            </svg>
                            
                    }
                </CategoryBtn>
                <Dropdown isOpen={isFilterOpen}>
                    <DropList>
                        <DropListItem>
                            <DropListText>by name</DropListText>
                            <ArrowUpIcon/>
                        </DropListItem>

                        <DropListItem>
                            <DropListText>by name</DropListText>
                            <ArrowDownIcon/>
                        </DropListItem>
                        
                        <DropListItem>
                            <DropListText>by data</DropListText>
                            <ArrowUpIcon/>
                        </DropListItem>

                        <DropListItem>
                            <DropListText>by data</DropListText>
                            <ArrowDownIcon/>
                        </DropListItem>

                        <DropListItem>
                            <DropListText>by ptiority</DropListText>
                            <ArrowUpIcon/>
                        </DropListItem>

                        <DropListItem>
                            <DropListText>by ptiority</DropListText>
                            <ArrowDownIcon/>
                        </DropListItem>
                    </DropList>
                </Dropdown>
            </Wrapper>
            </Container>
    )
};

export default FilterIcon