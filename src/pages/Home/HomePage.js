import { Card } from "../../components/CardComponente/Card";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ModalSavePin } from "../../containers/ModalSavePin/ModalSavePin";
import { ModalCreateFolder } from "../../containers/ModalCreateFolder/ModalCreateFolder";
export const HomePage = () => {
    return (
        <div>
        <ModalCreateFolder open={true}/>
            <Container fluid>
                <Row>
                    <Col xs={12} md={3}><Card title="Matematica"
                        image="https://i.imgur.com/NXcLbQo.jpg" total={0} /></Col>
                    <Col xs={12} md={3}><Card title="Trigonometria"
                        image="https://i.imgur.com/pKMVkRs.jpg" total={1} /></Col>
                </Row>
            </Container>
        </div>

    );
}