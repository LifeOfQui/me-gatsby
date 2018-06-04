import React from 'react';
import styled from 'styled-components';

const PageSectionDiv = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 1250px;
  padding: 4.5rem 0;
`;

const PageSection = props => (
    <PageSectionDiv className={props.areaClassName}>{props.children}</PageSectionDiv>
);

export default PageSection;