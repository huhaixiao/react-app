import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './routes/'

const hello = 'js'

const root = createRoot(document.querySelector('#app') as HTMLElement);
root.render(<App />);
window.console.log('test')

// https://appleid.apple.com/auth/authorize?client_id=com.openai.chat.sia&scope=name%20email&response_type=code&redirect_uri=https%3A%2F%2Fauth0.openai.com%2Flogin%2Fcallback&response_mode=form_post&state=ZZwCuzhTn-50MXmak0LQWSzzRXd7CniG