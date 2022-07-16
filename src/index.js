import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Question from './User/Question'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Question/>
  </StrictMode>
);
