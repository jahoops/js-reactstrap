// https://bootstrap.build/app/v4.1.1/
// Palette colors: https://coolors.co/app
import "../bootstrap.min.css";

import React, { Component } from "react";
import { Button, Badge, Row, Col } from "reactstrap";
import { Button as StyledButton } from "../styled/Button";
import { ContainerStyled } from "../styled/Container";
import {
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  FormText,
  CustomInput,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";

import {
  Breadcrumb as StyledBreadcrumb,
  BreadcrumbItem
} from "../styled/Breadcrumb";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <ContainerStyled>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Plain Text (Static)</Label>
            <Input plaintext>Some plain text/ static value</Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Big Email</Label>
            <Input
              placeholder="lg"
              bsSize="lg"
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleUrl">Url</Label>
            <Input
              type="url"
              name="url"
              id="exampleUrl"
              placeholder="url placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">Number</Label>
            <Input
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="number placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDatetime">Datetime</Label>
            <Input
              type="datetime"
              name="datetime"
              id="exampleDatetime"
              placeholder="datetime placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleTime">Time</Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleColor">Color</Label>
            <Input
              type="color"
              name="color"
              id="exampleColor"
              placeholder="color placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSearch">Search</Label>
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="search placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelectMulti">Select Multiple</Label>
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
              multiple
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" /> Option one is this and that—be sure to
              include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Check me out
            </Label>
          </FormGroup>
        </Form>
        <br />
        <Form>
          <FormGroup row>
            <Label for="examplePassword">Invalid input</Label>
            <Input onChange={this.handleChange} invalid />
            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>

          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelect" sm={2}>
              Select
            </Label>
            <Col sm={10}>
              <Input type="select" name="select" id="exampleSelect" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleSelectMulti" sm={2}>
              Select Multiple
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Text Area
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              File
            </Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </Col>
          </FormGroup>
          <FormGroup tag="fieldset" row>
            <legend className="col-form-label col-sm-2">Radio Buttons</legend>
            <Col sm={10}>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" /> Option one is this and
                  that—be sure to include why it's great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" /> Option two can be
                  something else and selecting it will deselect option one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio2" disabled /> Option three is
                  disabled
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="checkbox2" sm={2}>
              Checkbox
            </Label>
            <Col sm={{ size: 10 }}>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" id="checkbox2" /> Check me out
                </Label>
              </FormGroup>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomFileBrowser">File Browser</Label>
            <CustomInput
              type="file"
              id="exampleCustomFileBrowser"
              name="customFile"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleCheckbox">Checkboxes</Label>
            <div>
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox"
                label="Check this custom checkbox"
              />
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox2"
                label="Or this one"
              />
              <CustomInput
                type="checkbox"
                id="exampleCustomCheckbox3"
                label="But not this disabled one"
                disabled
              />
            </div>
          </FormGroup>
        </Form>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
          <Col xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>
            .col-sm-6 .col-sm-order-2 .col-sm-offset-2
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            .col-sm-12 .col-md-6 .col-md-offset-3
          </Col>
        </Row>
        <StyledButton block disabled active={true} color="primary">
          Cliquez moi
        </StyledButton>
        <p>
          Je suis un badge <Badge color="secondary">New</Badge>
        </p>
        <Button color="primary" outline>
          Notifications <Badge color="secondary">4</Badge>
        </Button>
        <Button outline color="primary">
          primary
        </Button>{" "}
        <Button outline color="secondary">
          secondary
        </Button>{" "}
        <Button outline color="success">
          success
        </Button>{" "}
        <Button outline color="info">
          info
        </Button>{" "}
        <Button outline color="warning">
          warning
        </Button>{" "}
        <Button outline color="danger">
          danger
        </Button>
        <StyledBreadcrumb primary>
          <BreadcrumbItem active>Home</BreadcrumbItem>
          <BreadcrumbItem>Contact</BreadcrumbItem>
          <BreadcrumbItem>A props</BreadcrumbItem>
        </StyledBreadcrumb>
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination>
      </ContainerStyled>
    );
  }
}

export default App;
