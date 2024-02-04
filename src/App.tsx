import AppRoutes from './routes';
import AppProvider from './contexts/app';

const App = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);

export default App;
