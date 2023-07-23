import { Modal } from '../../components/Modal/Modal';
import {Button} from '../../components/Button/Button';
import { ListGroup } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export const ModalSavePin = ({ open }) => {
    return (
        <Modal
            title="Salvar Pin"
            open={open}
            controls={[
                {
                    label: 'Criar pasta',
                    variant: 'secondary',
                    loading: false,
                    loadingLabel: 'criando',
                    onClick: () => {
                        console.log('clikou');
                    }
                }
            ]}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col xs={8}>Matematica</Col>
                        <Col xs={4} className='text-end'><Button label="Salvar" loadingLabel="Salvando"/></Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={8}>Matematica</Col>
                        <Col xs={4} className='text-end'><Button label="Salvar" loadingLabel="Salvando"/></Col>
                    </Row>
                </ListGroup.Item>
               
            </ListGroup>
        </Modal>
    )
}