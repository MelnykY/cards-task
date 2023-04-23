import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar/Avatar";
import {
  Container,
  Tweets,
  Followers,
  CardBtnFollowing,
  CardBtnFollow,
} from "./Card.styled";

const Card = (users) => {
  const { id, user, tweets, followers, avatar } = users;
  const [isFollower, setIsFollower] = useState(
    JSON.parse(localStorage.getItem(`${id}-isFollower`)) ?? false
  );
  const [numbFollowers, setNumbFollowers] = useState(
    JSON.parse(localStorage.getItem(`${id}-followers`)) ?? followers
  );

  useEffect(() => {
    localStorage.setItem(`${id}-isFollower`, JSON.stringify(isFollower));
    localStorage.setItem(`${id}-followers`, JSON.stringify(numbFollowers));
  }, [id, isFollower, numbFollowers]);

  const onFollow = () => {
    setIsFollower(true);
    setNumbFollowers(numbFollowers + 1);
  };

  const onFollowing = () => {
    setIsFollower(false);
    setNumbFollowers(numbFollowers - 1);
  };

  return (
    <Container>
      <Avatar img={avatar} alt={user} />
      <Tweets>{tweets} TWEETS</Tweets>
      <Followers>{numbFollowers.toLocaleString("en-US")} FOLLOWERS</Followers>
      {isFollower ? (
        <CardBtnFollowing type="button" onClick={onFollowing}>
          Following
        </CardBtnFollowing>
      ) : (
        <CardBtnFollow type="button" onClick={onFollow}>
          Follow
        </CardBtnFollow>
      )}
    </Container>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};

export default Card;





