import React, {useState, useCallback} from 'react' 
import {Form, Segment, Container, Header} from 'semantic-ui-react'
import emailjs from 'emailjs-com'

export default function Contact(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const serviceId = process.env.REACT_APP_SERVICE_ID
    const templateId = process.env.REACT_APP_TEMPLATE_ID
    const userId = process.env.REACT_APP_USER_ID

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = useCallback((e) =>{
        emailjs.sendForm(serviceId, templateId, e.target, userId)
        setName('')
        setEmail('')
        setMessage('')
    })

    return(
        <div id="Contact" className="Contact padded-div">
            <Segment vertical>
                <Container>
                    <Header className="main-title" size="huge" textAlign="center">Get in touch!</Header>
                    <Form onSubmit={handleSubmit}>
                        <Form.Input label="Name" required value={name} onChange={handleChangeName} name="from_name"></Form.Input>
                        <Form.Input label="Email" required value={email} onChange={handleChangeEmail} type="email" name="from_email"></Form.Input>
                        <Form.TextArea label="Your Message" required value={message} onChange={handleChangeMessage} name="message"></Form.TextArea>
                        <Form.Button>Submit</Form.Button>
                    </Form>
                </Container>
            </Segment>
        </div>
    )
}