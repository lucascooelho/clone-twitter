import React from 'react';
import StickBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
} from './styles';


const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Search on Twitter" />
              <SearchIcon />
          </SearchWrapper>

          <StickBox>
            <Body>
              <List 
                title="Who to follow"
                elements={[
                  <FollowSuggestion 
                    name="Lucas Coelho"
                    nickname="@lucascooelho"
                  />,
                  <FollowSuggestion 
                    name="Twitter Oficial"
                    nickname="@twitter"
                  />,
                  <FollowSuggestion 
                    name="Star Wars"
                    nickname="@starwars"
                  />
                ]}
              />

              <List
                title="What’s happening"
                elements={[
                  <News />,
                  <News />,
                  <News />,
                  <News />,
                  <News />,
                  <News />,
                  <News />,
                  <News />,
                  <News />,
                  <News />,
                ]}
              />
            </Body>
          </StickBox>
      </Container>
  );
}

export default SideBar;