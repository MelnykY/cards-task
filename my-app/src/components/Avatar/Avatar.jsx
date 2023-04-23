import { Container, Image } from "./Avatar.styled";

const Avatar = ({user, avatar}) => {
  return (
    <Container>
      <Image src={avatar} alt={user} />
    </Container>
  );
};

export default Avatar;
