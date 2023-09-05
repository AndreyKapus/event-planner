import { useState } from "react";
import { CategoryBtn } from "./FilterButton.styled";
import {
  Dropdown,
  DropList,
  DropListItem,
  BtnContent,
  Wrapper,
  Container,
  DropListText,
  BtnContentText,
} from "./FilterButton.styled.js";
import { useFilter } from "../../../Store/FileterStore";
import { useLang } from "../../../Store/LanguegeStore";
import { useEffect } from "react";

const filterOptions = [
  "Art",
  "Music",
  "Business",
  "Conference",
  "Workshop",
  "Sport",
];

const FilterIcon = ({ toggleFilterOpen, isFilterOpen, setIsFilterOpen }) => {
  const [selectCategory, setSelectedCategory] = useState("Category");

  const setCategory = useFilter((state) => state.setCategoryFilter);
  const getLeng = useLang((state) => state.lang);

  useEffect(() => {
    if (getLeng === "en") {
      setSelectedCategory("Category");
    }
    if (getLeng === "ua") {
      setSelectedCategory("Категорія");
    }
  }, [getLeng]);

  const handleCategoryChange = (option) => {
    setSelectedCategory(option);
    setIsFilterOpen(false);
    setCategory(option);
  };

  return (
    <Container>
      <Wrapper>
        <CategoryBtn
          id="filter"
          type="button"
          onClick={toggleFilterOpen}
          isOpen={isFilterOpen}
        >
          <BtnContent>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4L9 12V18L15 21V12L20 4H4Z" stroke="#7B61FF" />
            </svg>
            <BtnContentText isFilterOpen={isFilterOpen}>
              {selectCategory}
            </BtnContentText>
          </BtnContent>
        </CategoryBtn>
        <Dropdown isOpen={isFilterOpen}>
          <DropList>
            {filterOptions.map((option) => (
              <DropListItem
                key={option}
                onClick={(e) => {
                  handleCategoryChange(option);
                }}
              >
                <DropListText className="text">{option}</DropListText>
              </DropListItem>
            ))}
          </DropList>
        </Dropdown>
      </Wrapper>
    </Container>
  );
};

export default FilterIcon;
