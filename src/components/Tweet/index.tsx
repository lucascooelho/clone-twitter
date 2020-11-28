import React from 'react';

import {
  Container,
  Retweeted,
  RocketSeatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from "./styles";

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RocketSeatIcon />
              You retweeded
          </Retweeted>

          <Body>
              <Avatar />

              <Content>
                  <Header>
                      <strong>Lucas Coelho</strong>
                      <span>@lucascooelho</span>
                      <Dot />
                      <time>November 14, 2020</time>
                  </Header>

                  <Description>That's the frist tweet</Description>

                  <ImageContent />
                  
                  <Icons>
                      <Status>
                          <CommentIcon />
                          18
                      </Status>
                      <Status>
                          <RetweetIcon />
                          18
                      </Status>
                      <Status>
                          <LikeIcon />
                          321
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  )
}

export default Tweet;