import { BaseProvider } from '.';

export default class RootProvider extends BaseProvider {
    state = {
      nome: 'root',
      loading: true,
		  message: null,
      isAuthenticated: false,
      usuario: {}
    }

    actions = {
      showLoading: (message) => this.setState({ loading: true, message }),
      hideLoading: () => this.setState({ loading: false }),
      login: (login, senha) => {
        alert(login + senha);
        // this.setState({
        //   tasks: [task, ...this.state.tasks]
        // })
      },
    }
    render () {
      return super.render();
    }
  }