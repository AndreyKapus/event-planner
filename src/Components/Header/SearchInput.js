import { useTranslation } from 'react-i18next';
import IconSearch from '../../Icons/IconSearch';
import { useSearch } from '../../Store/SearchStore';
import {
    Input,
    InputWrapper,
    IconWrapper,
} from './Header.styled'

const SearchInput = () => {
    const setSearchInput = useSearch((state) => state.handleChange);

    const {t} = useTranslation()

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <InputWrapper>
            <IconWrapper>
                <IconSearch/>
            </IconWrapper>
            <Input type="text" placeholder={t("search-input")} onChange={handleInputChange}/> 
        </InputWrapper>
    )
};

export default SearchInput;