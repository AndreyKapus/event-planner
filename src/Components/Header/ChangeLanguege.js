import { SelectWrapper,
     Options,
     OptionsWrapper,
     SelectBtn
    } from './Header.styled.js'

export const ChangeLanguege = ({changeLanguage, lang, toggleDropDown, dropDownIsOpen}) => {

    return (
        <SelectWrapper>
            <SelectBtn onChange={(e) => changeLanguage(e.value)} onClick={toggleDropDown}>{lang}</SelectBtn>
            {dropDownIsOpen && 
                <OptionsWrapper>
                    <Options onClick={() => changeLanguage('en')} value='en'>en</Options>
                    <Options onClick={() => changeLanguage('ua')} value='ua'>ua</Options>
                </OptionsWrapper>   
            }
        </SelectWrapper>
    )
};

export default ChangeLanguege;