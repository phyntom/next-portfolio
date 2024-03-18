import React from 'react'
import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Button,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'

type EmailMessageProps = {
  names: string
  senderEmail: string
  message: string
}

const EmailMessage = (props: EmailMessageProps) => {
  const { names, senderEmail, message } = props
  return (
    <Html>
      <Head />
      <Preview>Message from {names}</Preview>
      <Body>
        <Section>
          <Container>
            <Row>
              <Column>
                <Heading>Message from {names}</Heading>
                <Text>{message}</Text>
                <Button href={`mailto:${senderEmail}`}>Reply</Button>
              </Column>
            </Row>
          </Container>
        </Section>
      </Body>
    </Html>
  )
}

export default EmailMessage
