import React from 'react';
import Popup from './Popup';

export default function LoginModal({ buttonPopup, setButtonPopup }) {
  return (
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Log in</button>
          </div>
        </form>
      </div>
    </Popup>
  );
}
