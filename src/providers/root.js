import { BaseProvider } from '.';

export default class RootProvider extends BaseProvider {
  constructor() {
    super();
    this.showLoading = this.actions.showLoading.bind(this);
    this.hideLoading = this.actions.hideLoading.bind(this);
  }

  state = {
    nome: 'root',
    loading: false,
    message: 'Aguarde...',
    isAuthenticated: false,
    usuario: {}
  }

  actions = {
    showLoading: (message) => this.setState({ loading: true, message }),
    hideLoading: () => this.setState({ loading: false }),
  }
  render () {
    return super.render();
  }
}