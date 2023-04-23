import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 28px 20px 36px 20px;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background-color: #5736a3;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Tweets = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #ebd8ff;
`;

export const Followers = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #ebd8ff;
`;

export const CardBtnFollowing = styled.button`
  margin-top: 10px;
  width: 196px;
  padding: 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  text-shadow: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: currentColor;
  background-color: #5cd3a8;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const CardBtnFollow = styled.button`
  margin-top: 10px;
  width: 196px;
  padding: 14px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  text-shadow: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: currentColor;
  background-color: #ebd8ff;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

