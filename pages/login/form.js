import createLoginButton from './loginButton';
import createRegisterButton from './registerButton';
import createButtonsContainer from './buttonsContainer';

function createForm() {
  const form = document.createElement('form', { id: 'login-form' });

  document.querySelector('#container').appendChild(form);

  form.innerHTML = `
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" name="email" placeholder="Email" id="email">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" name="password" placeholder="Password" id="password">
    </div>
  `;

  form.appendChild(createButtonsContainer());

  const buttonsContainer = document.querySelector('#buttonsContainer');

  buttonsContainer.appendChild(createLoginButton());
  buttonsContainer.appendChild(createRegisterButton());
}

export default createForm;
