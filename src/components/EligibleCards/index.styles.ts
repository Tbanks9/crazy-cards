import styled from "styled-components";

export const StyledMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgb(246, 242, 241);
  font-family: Nunito, Arial, sans-serif;
`;

export const StyledFormContainer = styled.div`
  background-color: white;
  padding: 50px 100px;
  margin: 100px 0;
  border-radius: 8px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 384px;
  padding: 0;
  background-color: white;
  border-radius: 8px;
`;

export const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 12px 0 0;
  padding: 0;
`;

export const StyledLi = styled.li`
  float: left;
  margin: 0;
  width: 76.8px;
  height: 48px;
  position: relative;
`;

export const StyledRadioInput = styled.input`
display: block;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
opacity: 0.011;
z-index: 100;
border: 1px solid rgb(156, 155, 165)};

&:hover + label {
  border: 2px solid rgb(38, 26, 145)};
  cursor: pointer;
}

&:checked + label {
  background-color: rgb(234, 235, 247);
  border: 2px solid rgb(38, 26, 145)};
  font-weight: 700;
  text-align: center;
}

&:nth-child(1) {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-left-style: solid;
  }
`;

export const StyledRadioLabel = styled.label`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  z-index: 90;
`;

export const StyledLabel = styled.label`
  font-family: Nunito, Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: rgb(8, 5, 28);
  margin-bottom: 12px;
  padding: 0px;
`;

export const StyledInput = styled.input`
  width: 350px;
  height: 18px;
  margin: 0px;
  padding: 14px 16px;
  font-size: 1rem;
  border: 1px solid rgb(156, 155, 165);
  border-radius: 4px;
`;
export const StyledInputDayMonth = styled.input`
  width: 54px;
  height: 18px;
  margin: 0px;
  padding: 14px 16px;
  font-size: 1rem;
  border: 1px solid rgb(156, 155, 165);
  border-radius: 4px;
`;

export const StyledInputYear = styled.input`
  width: 142px;
  height: 18px;
  margin: 0px;
  padding: 14px 16px;
  font-size: 1rem;
  border: 1px solid rgb(156, 155, 165);
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  width: 253px;
  height: 48px;
  margin: 0px;
  padding: 0px 48px;
  cursor: pointer;
  color: #08051c;
  background-color: #f4ee22;
  border: 1px solid #f4ee22;
  border-radius: 24px;
  font-family: "Buenos Aires", Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
`;

export const StyledOccupationLabel = styled.label`
  height: 28px;
  margin: 8px 0 0;
  padding: 14px 15px;
  font-size: 1rem;
  border: 1px solid rgb(156, 155, 165);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledCards = styled.div`
  width: 325px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  border: 1px solid #5b6b79;
  padding: 20px;
  margin-bottom: 20px;
  font-family: Nunito, Arial, sans-serif;
  cursor: pointer;
`;

export const StyledNav = styled.nav`
  width: fill-available;
  height: fit-content;
  padding: 20px;
  background: #0f0a3a;
`;
