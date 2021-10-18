import React from 'react'
import { Container } from 'reactstrap';
import Header from '../components/Header/Header';
import NavBar from '../components/Navigation/NavBar';
import IPageProps from '../interfaces/page'

const HomePage:React.FunctionComponent<IPageProps> = props => {
    return (
        <Container fluid className="p-0">
            <NavBar/>
            <Header
                title="A nerdy Blog Web"
                headline="A title random"
            />
            <Container className="mt-5">
                Blog stuff here ...
            </Container>
        </Container>
    )
}

export default HomePage;