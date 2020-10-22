import styled from 'styled-components';

const ReviewsContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1300px;
 
  @media screen and (max-width: 830px) {
    flex-direction: column;
    align-items: center;

    > div:not(:first-child) {
      margin-top: 50px;
    }
  }
`;

const Review = styled.div`
  max-width: 300px;
  margin-right: 40px;

  .note {
    max-width: 250px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: lightgray;
    font-style: italic;
  }

  .author {
    margin-top: 30px;
    font-weight: 600;
  }
`;

export { ReviewsContainer, Review }
