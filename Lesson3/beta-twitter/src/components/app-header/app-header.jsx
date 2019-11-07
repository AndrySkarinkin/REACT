import React from "react";

import styled from "styled-components";

const HeaderWrap = styled.div`
  display:flex
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 1.2rem;
    color: blue;
  }
`;

const AppHeader = props => {
  const { countLike, allPost } = props;
  return (
    <HeaderWrap>
      <h1> Andry Skarinkin </h1>
      <h2>
        {allPost} записей, из них понравилось {countLike}
      </h2>
    </HeaderWrap>
  );
};

export default AppHeader;
