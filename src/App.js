import { Provider } from 'react-redux'

import { Burger, Header } from 'containers'
import store from 'store'

const App = () => (
  <Provider store={store}>
    <Header />
    <Burger />
  </Provider>
)

export default App
