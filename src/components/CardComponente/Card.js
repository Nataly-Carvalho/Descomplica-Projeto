import CardBS from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
export const Card = ({image, title, total}) => {
    return (
        <CardBS>
            <CardBS.Img src={image} alt="Card image" />
            <CardBS.ImgOverlay>
                <Button variant="primary">
                    Salvar <Badge bg="secondary">{total}</Badge>
                </Button>
            </CardBS.ImgOverlay>
            <CardBS.Body><CardBS.Title>{title}</CardBS.Title></CardBS.Body>
        </CardBS>
    );
} 