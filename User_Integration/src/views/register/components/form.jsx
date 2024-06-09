import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        age: '',
        address: '',
        sex: '',
        tel: '',
    });

    const navigate = useNavigate();
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      const newForm = {
        ...form,
        [name]: value,
      };
      setForm(newForm);
    };

    const handleChangeSex = (e) => {
      const { name, value } = e.target;
      if (!['M', 'F', 'O'].includes(value)) {
          return;
      }
      handleChange(e);
    };
  
    const handleSubmitForm = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });
        if (res.status === 200) {
          alert('Registro exitoso');
          navigate('/');
        } else {
          alert('Error al registrar');
        }
      } catch (error) {
        alert('Error al registrar');
        throw new Error('Error al registrar');
      }
    };
    return (
      <div style={{width: "580px"}}>
        <h1 style={{textAlign: "center", color: "#399C7E"}}>Registro de Usuario</h1>
        <div style={{width: "560px", borderRadius: "10px", boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)', padding: "20px"}}>
          
          <form style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', alignItems: "center" }}>

              <p>Nombre:</p>
              <input
                  style={{ height: '45px', width:'97.5%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={form.name}
                  onChange={handleChange}
              />

              <p>Email:</p>
              <input
                  style={{ height: '45px', width:'97.5%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
              />

              <p>Edad:</p>
              <input
                  style={{ height: '45px', width:'97.5%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
                  type="number"
                  name="age"
                  placeholder="Edad"
                  value={form.age}
                  onChange={handleChange}
              />

              <p>Domicilio:</p>
              <input
                  style={{ height: '45px', width:'97.5%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
                  type="text"
                  name="address"
                  placeholder="Domicilio"
                  value={form.address}
                  onChange={handleChange}
              />

              <p>Sexo:</p>
              <select
                  style={{ height: '45px', width:'99.5%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
                  type="text"
                  name="sex"
                  placeholder="Sexo"
                  value={form.sex}
                  onChange={handleChangeSex}
              >
                  <option value="">Seleccione...</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                  <option value="O">Otro</option>

              </select>

              <p>Teléfono:</p>
              <input
                  style={{ height: '45px', width:'97.5%', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #399C7E'}}
                  type="text"
                  name="tel"
                  placeholder="Teléfono"
                  value={form.tel}
                  onChange={handleChange}
              />
          </form>
        </div>
      <div style={{ paddingTop: '5%', display: "flex", alignItems: "center", justifyContent: "center"}}>
            <button
              onClick={handleSubmitForm}
              style={{
                height: '50px',
                width: '140px',
                backgroundColor: '#399C7E',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: 'bold',
                textAlign: 'center',
                borderRadius: '5px',
              }}
              type="submit"
            >
              Registrar
            </button>
          </div>
      </div>
    );
  };
  
  export default Form;