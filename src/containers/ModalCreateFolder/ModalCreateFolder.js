import { Modal } from '../../components/Modal/Modal'
import { Form } from 'react-bootstrap'
import { useState } from 'react'

export const ModalCreateFolder = ({ open }) => {
    const [folderName,setFloderName]= useState('');

    const handleChange =(e)=>{
        setFloderName(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("aaaa", folderName)
    }
    return (
        <Modal
            open={open}
            title="Criar Pasta"
            controls={[
                {
                    label: 'Criar e Salvar',
                    loadingLabel: ' Criando',
                    variant: 'secondary',
                    loading: false,
                    type:'submit',
                    form: 'criarPasta',
                }

            ]}
        >
            <Form onSubmit={handleSubmit} id='criarPasta'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome da pasta</Form.Label>
                    <Form.Control type="text" placeholder="Ex: Matematica" value={folderName} onChange={handleChange}/>
                </Form.Group>
            </Form>

        </Modal>
    )
}