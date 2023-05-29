import React from "react";
import '../styles/SignCreateStyle.scss'
import {Col, Form, Row, Button} from "react-bootstrap";
export default function SignIn(props){
    return(
        <Form noValidate onSubmit={props.handleSubmit} className="authForm">
            <Form.Group className="mb-3"  as={Row} controlId="formEmail">
                <Form.Label className="authLabel" column sm={3}>Email</Form.Label>
                <Col sm={7}>
                    <Form.Control required className="authInput" type="email" placeholder="Email" value={props.values.email} onChange={
                    e => props.setValues("email", e.target.value)} isInvalid={props.errors.email.length > 0} />
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
            <Button className="authButton" variant="primary" value="login" type="submit" size="lg">
                SIGN-IN
            </Button>
        </Form>
    );
}