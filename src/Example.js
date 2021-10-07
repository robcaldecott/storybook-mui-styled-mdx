import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

/**
 * The component description.
 */
const Example = styled("div")`
  color: white;
  background-color: red;
`;

Example.propTypes = {
  /** Prop description. */
  children: PropTypes.node.isRequired,
};

export { Example };
