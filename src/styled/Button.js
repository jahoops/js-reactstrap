import styled from "styled-components";
import { Button as ButtonB } from "reactstrap";
import { lighten } from "polished";

const Button = styled(ButtonB)`
  font-size: 1.5em;
  outline: none;
  &:active {
    outline: none;
  }
`;

export { Button };
