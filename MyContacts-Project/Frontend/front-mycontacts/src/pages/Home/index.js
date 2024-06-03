import {
  Container,
  Header,
  ListContainer,
  Card,
  InputSearchContainer,
} from './styles';

import arrow from '../../assets/icons/arrow.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Thiago Gasparini</strong>
            <small>Instagram</small>
          </div>
          <span>thiago_engprod@outlook.com</span>
          <span>(41) 99704-8358</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Deletar" />
          </button>
        </div>
      </Card>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Thiago Gasparini</strong>
            <small>Instagram</small>
          </div>
          <span>thiago_engprod@outlook.com</span>
          <span>(41) 99704-8358</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Deletar" />
          </button>
        </div>
      </Card>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Thiago Gasparini</strong>
            <small>Instagram</small>
          </div>
          <span>thiago_engprod@outlook.com</span>
          <span>(41) 99704-8358</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Deletar" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
