import RootProvider from './root';
import { asyncFindTiposDocumentos } from '../services/api';

export default class LoginProvider extends RootProvider {
  state = {
    nome: 'teste',
    login: null,
    senha: null,
  }

  actions = {
    login: async (login, senha) => {
      const { showLoading, hideLoading } = this.props.children.props;
      showLoading("");
      await asyncFindTiposDocumentos(login,senha);
      hideLoading();
    },
  }
  render () {
    return super.render();
  }
}