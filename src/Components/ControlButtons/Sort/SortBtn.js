import {SortBtnStyled,
        Wrapper,
        Dropdown,
        DropList,
        DropListItem,
        DropListText,
        BtnContent,
        BtnContentText,
    } from './SortBy.styled'
import ArrowUpIcon from '../../../Icons/ArrowUp';
import { useSort } from '../../../Store/SortStore';
import { useState } from 'react';

const sortOptions = ['From low', 'From high']

const SortBtn = ({toggleSortOpen, isSortOpen, isFilterOpen, setSortOpen}) => {
    const [sort, setSort] = useState('Sort by');

    const sortFilter = useSort((state) => state.setSortFilter);

    const handleSort = (option) => {
        sortFilter(option);
        setSortOpen(false);
        setSort(option);
    };
    
    return (
        <Wrapper> 
            <SortBtnStyled id='sort' type='button' onClick={toggleSortOpen} isOpen={isSortOpen} isFilterOpen={isFilterOpen}>
                    <BtnContent>
                        <BtnContentText isFilterOpen={isSortOpen}>{sort}</BtnContentText>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5M14 5H20M10 5L4 5M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM16 12H4M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19ZM8 19H20" stroke="#7B61FF" />
                        </svg>
                    </BtnContent>
            </SortBtnStyled>
            <Dropdown isOpen={isSortOpen}>
                    <DropList>
                        {sortOptions.map((option) => (
                        <DropListItem key={option} onClick={(e) => {
                            handleSort(option)
                        }}>
                            <DropListText>{option}</DropListText>
                            <ArrowUpIcon/>
                        </DropListItem>
))}
                    </DropList>
                </Dropdown>
        </Wrapper>
    )
};

export default SortBtn;