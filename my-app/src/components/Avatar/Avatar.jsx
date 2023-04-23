import { Container, AvatarContainer, Image } from "./Avatar.styled";

const Avatar = ({ user, avatar }) => {
  return (
    <Container>
      <AvatarContainer>
        <Image src={avatar} alt={user} />
      </AvatarContainer>
    </Container>
  );
};

export default Avatar;
