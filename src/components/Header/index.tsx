import React, { FC } from "react";
import styled from "styled-components";
import IconHelp from "./../../assets/icon-help.svg";
import IconNotification from "./../../assets/icon-notification.svg";
import IconAvatar from "./../../assets/icon-avatar.svg";

type Props = {};

const Background = styled.div`
  background: #142159;
  box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.08);
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

const Header: FC<Props> = () => {
  return (
    <>
      <Background>
        <Box>
          <img src={IconAvatar} alt='IconAvatar' />
          <Title>Trainee Store</Title>
        </Box>
        <Box>
          <img src={IconHelp} alt='IconHelp' />
          <img src={IconNotification} alt='IconNotification' />
          <img src={IconAvatar} alt='IconAvatar' />
          <Title>Gustavo Silva</Title>
        </Box>
      </Background>
    </>
  );
};

export default Header;
