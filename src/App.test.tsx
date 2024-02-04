import { render, waitFor } from '@testing-library/react';
import App from './App';

test('should render main app', async () => {
  await waitFor(() => render(<App />));
});
