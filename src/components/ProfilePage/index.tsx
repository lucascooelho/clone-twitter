import React from "react";

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from "./styles";

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1>Lucas Coelho</h1>
        <h2>@lucascooelho</h2>

        <p>
          Developer at <a href="https://twitter.com/home">@Twitter</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Presidente Venceslau - Brazil
          </li>
          <li>
            <CakeIcon />
            Born on February 17, 1992
          </li>
        </ul>

        <Followage>
          <span>
            following <strong>123</strong>
          </span>
          <span>
            <strong>321 </strong> followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
