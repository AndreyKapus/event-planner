import { SelectWrapper,
     Options,
     OptionsWrapper,
     SelectBtn
    } from './Header.styled.js'

export const ChangeLanguege = ({changeLanguage, lang}) => {

    return (
        <SelectWrapper>
            <SelectBtn onChange={(e) => changeLanguage(e.value)}>{lang}</SelectBtn>
            <OptionsWrapper>
                <Options onClick={() => changeLanguage('en')} value='en'>en</Options>
                <Options onClick={() => changeLanguage('ua')} value='ua'>ua</Options>
            </OptionsWrapper>     
        </SelectWrapper>
    )
};

export default ChangeLanguege;