import React from 'react';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
  TweetButton
} from "./styles";

const MenuBar: React.FC = () => {
  return (
    <Container>
        <Topside>
            <Logo />

            <MenuButton>
                <HomeIcon />
                <span>Home Page</span>
            </MenuButton>
            
            <MenuButton>
                <BellIcon />
                <span>Notifications</span>
            </MenuButton>
            
            <MenuButton>
                <EmailIcon />
                <span>Messages</span>
            </MenuButton>
            
            <MenuButton>
                <FavoriteIcon />
                <span>Favorites</span>
            </MenuButton>
            
            <MenuButton className="active">
                <ProfileIcon />
                <span>Profile</span>
            </MenuButton>

            {/* <TweetButton>Tweetar</TweetButton>           */}
        </Topside>

        <Botside>
            <Avatar />

            <ProfileData>
                <strong>Lucas Coelho</strong>
                <span>@lucascooelho</span>
            </ProfileData>

            <ExitIcon />
        </Botside>
    </Container>
  );
};

export default MenuBar;