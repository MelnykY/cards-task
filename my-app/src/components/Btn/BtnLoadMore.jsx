import { ButtonLoadMore } from "./BtnLoadMore.styled";
import PropTypes from "prop-types";

const BtnLoadMore = ({ onClick }) => {
  return <ButtonLoadMore onClick={onClick}>Load more</ButtonLoadMore>;
};

BtnLoadMore.propTypes = {
  onClick: PropTypes.func,
};

export default BtnLoadMore;
