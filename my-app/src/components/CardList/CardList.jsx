import { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import BtnLoadMore from "../Btn/BtnLoadMore";
import { List, Container } from "./CardList.styled";

const CardList = ({ users }) => {
  const cardsPerPage = 3;
  const [next, setNext] = useState(cardsPerPage);
  const handleMoreCards = () => {
    setNext(next + cardsPerPage);
  };

  return (
    <Container>
      <List>
        {users
          ?.slice(0, next)
          ?.map(({ id, tweets, followers, avatar, user }) => (
            <Card
              key={id}
              id={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              user={user}
            />
          ))}
      </List>
      {next < users?.length && (
        <BtnLoadMore onClick={handleMoreCards}>Load more</BtnLoadMore>
      )}
    </Container>
  );
};

CardList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      user: PropTypes.string,
      avatar: PropTypes.string,
      tweets: PropTypes.number,
      followers: PropTypes.number,
    })
  ),
};

export default CardList;
