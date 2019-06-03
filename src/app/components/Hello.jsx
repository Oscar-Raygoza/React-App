import React from "react";
import PropTypes from "prop-types";

const Hello = ({ title }) => <p className="hello">Created by: {title}</p>;

Hello.propTypes = {
  title: PropTypes.string
};
export default Hello;
