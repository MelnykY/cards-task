import styled from "styled-components";

export const Container = styled.div`
  background-image: url("../../img/picture.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 168px;
  width: 308px;
`;

export const AvatarContainer = styled.div`
  background-color: #5736a3;
  width: 64px;
  height: 64px;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  border-radius: 50%;
  position: absolute;
  top: 178px;
  left: 150px;
`;

export const Image = styled.img`
  border-radius: 50%;
`;
