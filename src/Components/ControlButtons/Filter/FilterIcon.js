import { useState } from 'react';
import { CategoryBtn } from './FilterButton.styled';
import {Dropdown,
        DropList,
        DropListItem,
        BtnContent,
        Wrapper,
        Container,
} from './FilterButton.styled.js'
import ArrowUpIcon from '../../../Icons/ArrowUp';
import ArrowDownIcon from '../../../Icons/ArrowDown';

const FilterIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSortOpen = () => {
        !isOpen ? setIsOpen(true) : setIsOpen(false)
    };

    return (<Container>
            <Wrapper>
                <CategoryBtn type="button" onClick={toggleSortOpen} isOpen={isOpen}>
                    {isOpen ? 
                            <BtnContent>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4L9 12V18L15 21V12L20 4H4Z" stroke="#7B61FF"/>
                                </svg>
                                <p>Sort by</p>
                            </BtnContent> : 
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4L9 12V18L15 21V12L20 4H4Z" stroke="#3F3F3F" />
                            </svg>
                            
                    }
                </CategoryBtn>
                <Dropdown isOpen={isOpen}>
                    <DropList>
                        <DropListItem>
                            <p>by name</p>
                            <ArrowUpIcon/>
                        </DropListItem>

                        <DropListItem>
                            <p>by name</p>
                            <ArrowDownIcon/>
                        </DropListItem>
                        
                        <DropListItem>
                            <p>by data</p>
                            <ArrowUpIcon/>
                        </DropListItem>

                        <DropListItem>
                            <p>by data</p>
                            <ArrowDownIcon/>
                        </DropListItem>

                        <DropListItem>
                            <p>by ptiority</p>
                            <ArrowUpIcon/>
                        </DropListItem>

                        <DropListItem>
                            <p>by ptiority</p>
                            <ArrowDownIcon/>
                        </DropListItem>
                    </DropList>
                </Dropdown>
            </Wrapper>
            </Container>
    )
};

export default FilterIcon