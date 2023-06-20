import '../../styles/login/style.css';

import createForm from './form';

import login from './login';

document.querySelector('#app').innerHTML = `
  <div id="login">
    <div id="container">
      <div class="title"><h1>Log in</h1></div>
    </div>
  </div>
`;

createForm();
