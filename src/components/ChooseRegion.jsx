import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import '../styles/locationCard.css'

const ChooseRegion = () => {

    return (
        <div className="container">
            <hr />
            <Col className="d-flex container">

                <Card style={{ width: '30rem' }} className="roundCorners cardShadow cardsInRow cardWitdh spaces">
                    <Card.Body>
                        <Card.Title>Locations Vistied in APAC</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                 </Card.Text>
                        <Card.Link href="locations-in-region/MEA">MEA</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '30rem' }} className="roundCorners cardShadow cardsInRow spaces"  >
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
        </Card.Text>
                        <Card.Link href="locations-in-region/APAC">APAC</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <div className="container">
                <Col className="d-flex">

                    <Card style={{ width: '30rem' }} className="roundCorners cardShadow cardsInRow spaces">
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
        </Card.Text>
                            <Card.Link href="locations-in-region/AMERICAS">AMERICAS</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '30rem' }} className="roundCorners cardShadow cardsInRow spaces">
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
        </Card.Text>
                            <Card.Link href="locations-in-region/EUROPE">Europe</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>

                </Col>
            </div>
        </div>
    )
}

export default ChooseRegion