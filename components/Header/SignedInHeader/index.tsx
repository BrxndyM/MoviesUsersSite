import React, { useState } from 'react';
import { HomeOutlined, SearchOutlined, HeartOutlined, AppstoreOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { DropDown, NavMenu, SignOut } from '../styles';

function SignedInHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set initial login state

  const handleSignOut = () => {
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  return (
    <>
      <NavMenu>
        <a>
          <HomeOutlined />
          <span>HOME</span>
        </a>
        <a>
          <SearchOutlined />
          <span>SEARCH</span>
        </a>
        <a>
          <HeartOutlined />
          <span>WATCHLIST</span>
        </a>
        <a>
          <AppstoreOutlined />
          <span>ORIGINALS</span>
        </a>
        <a>
          <VideoCameraOutlined />
          <span>MOVIES</span>
        </a>
        <a>
          <VideoCameraOutlined />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <SignOut>
        <span onClick={handleSignOut}>SignOut</span>
      </SignOut>
    </>
  );
}

export default SignedInHeader;
