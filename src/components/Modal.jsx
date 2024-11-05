import { Modal, Button, Form } from 'react-bootstrap';

function ModalComponent({ show, onHide, title, text, type }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {type === 'login' ? (
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Введіть email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Введіть пароль" />
            </Form.Group>
          </Form>
        ) : (
          <p>{text}</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрити
        </Button>
        {type === 'confirmation' && (
          <Button variant="primary" onClick={() => {
            alert('Дія підтверджена!');
            onHide();
          }}>
            Підтвердити
          </Button>
        )}
        {type === 'login' && (
          <Button variant="primary" onClick={() => {
            alert('Успіх!');
            onHide();
          }}>
            Ввійти
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
