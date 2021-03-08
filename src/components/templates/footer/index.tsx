import React from 'react'
import Image from 'next/image'
import { Container, Row } from 'react-bootstrap'
import Menu from '../../organisms/menu'

type Props = {

}

const Footer = () => {
    return (
        <Container className="fixed-bottom" fluid={true}>
            <Row className="d-flex justify-content-center">
                AQUI ESTÁ O RODAPÉ
            </Row>
        </Container>
    )
}

export default Footer
