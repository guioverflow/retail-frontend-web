import React from 'react';

const InputComponent = () => {
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Digite algo" aria-label="Input" aria-describedby="basic-addon" />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button">Enviar</button>
      </div>
    </div>
  );
};

export default InputComponent;