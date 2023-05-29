import React from "react";
import '../styles/SignCreateStyle.scss'
import {Button, Col, Form, Row} from "react-bootstrap";
export default function CreateAcc(props){
    return(
        <Form noValidate onSubmit={props.handleSubmit} className="authForm">
            <Form.Group className="mb-3"  as={Row} controlId="formFirstName">
                <Form.Label className="authLabel" column sm={3}>First Name</Form.Label>
                <Col sm={7}>
                    <Form.Control required className="authInput" type="text" placeholder="First Name" value={props.values.firstName} onChange={
                        e => props.setValues("firstName", e.target.value)} isInvalid={props.errors.firstName.length > 0}/>
                    <Form.Control.Feedback type="invalid" className="authInvalid">
                        {props.errors.firstName}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3"  as={Row} controlId="formLastName">
                <Form.Label className="authLabel" column sm={3}>Last Name</Form.Label>
                <Col sm={7}>
                    <Form.Control required className="authInput" type="text" placeholder="Last Name" value={props.values.lastName} onChange={
                        e => props.setValues("lastName", e.target.value)} isInvalid={props.errors.lastName.length > 0} />
                    <Form.Control.Feedback type="invalid" className="authInvalid">
                        {props.errors.lastName}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3"  as={Row} controlId="formEmail">
                <Form.Label className="authLabel" column sm={3}>Email</Form.Label>
                <Col sm={7}>
                    <Form.Control required className="authInput" type="email" placeholder="Email" value={props.values.email} onChange={
                        e => props.setValues("email", e.target.value)} isInvalid={props.errors.email.length > 0}/>
                    <Form.Control.Feedback type="invalid" className="authInvalid">
                        {props.errors.email}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3" as={Row} controlId="formPassword">
                <Form.Label className="authLabel" column sm={3}>Password</Form.Label>
                <Col sm={7}>
                    <Form.Control required className="authInput" type="password" placeholder="Password" value={props.values.password} onChange={
                        e => props.setValues("password", e.target.value)} isInvalid={props.errors.password.length > 0} />
                    <Form.Control.Feedback type="invalid" className="authInvalid">
                        {props.errors.password}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3" as={Row} controlId="formRepeatPassword">
                <Form.Label className="authLabel" column sm={3}>Confirm Password</Form.Label>
                <Col sm={7}>
                    <Form.Control required className="authInput" type="password" placeholder="Confirm Password" value={props.values.repeatPassword} onChange={
                        e => props.setValues("repeatPassword", e.target.value)} isInvalid={props.errors.repeatPassword.length > 0}  />
                    <Form.Control.Feedback type="invalid" className="authInvalid">
                        {props.errors.repeatPassword}
                    </Form.Control.Feedback>
                </Col>
            </Form.Group>
            <Button className="authButton" variant="primary" value="login" type="submit" size="lg">
                CREATE AN ACCOUNT
            </Button>
        </Form>
    );
}