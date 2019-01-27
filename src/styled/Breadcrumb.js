import styled from "styled-components";
import {
  Breadcrumb as BreadcrumbB,
  BreadcrumbItem as BreadcrumbItemB
} from "reactstrap";
import { lighten } from "polished";

const Breadcrumb = styled(BreadcrumbB)`
  .breadcrumb {
    @media (max-width: 768px) {
        background: beige;
    }
  }
    
  }
`;

const BreadcrumbItem = styled(BreadcrumbItemB)`
  color: white;
  @media (max-width: 768px) {
    color: #222;
  }
`;
export { Breadcrumb, BreadcrumbItem };
