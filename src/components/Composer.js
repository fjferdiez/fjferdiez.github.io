import React, {useState} from 'react'
import { Card, Image, Dimmer, Button, Modal, Grid, Header, Container } from 'semantic-ui-react'

export default function Composer(props){
    const {composer, image, works} = props.data
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const handleDimmerShow = () => setActive(true)
    const handleDimmerHide = () => setActive(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const content = (
        <div>
            <h1>{composer}</h1>
            <Button basic inverted onClick={handleOpen}>See More</Button>
        </div>
    )

    return(
        <div className="Composer">
            <Card fluid>
                <Dimmer.Dimmable
                    as={Image}
                    dimmed={active}
                    dimmer={{active, content}}
                    onMouseEnter={handleDimmerShow}
                    onMouseLeave={handleDimmerHide}
                    blurring
                    src={image}
                    verticalAlign="middle"
                />
            </Card>
            <Modal
                closeIcon
                open={open}
                onClose={handleClose}
            >
                <Modal.Content>
                    <div className="works">
                        <Container>
                            <Grid columns={2} doubling stackable>
                                <Grid.Column verticalAlign="middle" width={8}>
                                    <Header textAlign="center" className="composer-name">{composer}</Header>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                <ul>
                                    {
                                        works.map((item, index) => {
                                            return(
                                                <li key={index}><h4>{item}</h4></li>
                                            )
                                        })
                                    }
                                </ul>
                                </Grid.Column>
                            </Grid>
                        </Container>
                    </div>
                </Modal.Content>
            </Modal>
        </div>
    )
}