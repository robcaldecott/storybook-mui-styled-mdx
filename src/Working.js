import PropTypes from "prop-types";
import { Box } from "@mui/material";

/**
 * The component description.
 */
const Working = ({ children }) => (
  <Box sx={{ backgroundColor: "red", color: "white" }}>{children}</Box>
);

Working.propTypes = {
  /** Prop description. */
  children: PropTypes.node.isRequired,
};

export { Working };
