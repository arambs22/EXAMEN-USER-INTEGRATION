import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PrevDescription from './components/PrevDescription';
import CardInfo from './components/cardInfo';

const Users = () => {
  const { id } = useParams();

  const [form, setForm] = useState({ description: '', prescription: '' });

  const [isLoading, setIsLoading] = useState(false);
  const [descriptions, setDescriptions] = useState([]);
  const [user, setUser] = useState([]);

  const fetchDescription = async () => {
    const response = await fetch('http://localhost:3000/description/' + id);
    const data = await response.json();
    setDescriptions(data);
    return data;
  };

  const handleInputChange = (event) => {
    setForm({
        ...form,
        [event.target.name]: event.target.value
    });
};

  const fetchUserById = async () => {
    const response = await fetch('http://localhost:3000/users/' + id);
    const data = await response.json();
    console.log(data);
    setUser(data);
    return data;
  };

  const handlePostDescription = async () => {
    const response = await fetch('http://localhost:3000/description/' + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: form.description, prescription: form.prescription }),
    });
    const data = await response.json();
    console.log(data);
    fetchDescription();
  };


  const handleGenerateHelp = async () => {
      const prompt = {
        prompt: form.description,
      };
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/chat/gemini', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(prompt),
        });
        const data = await response.json();
        setForm({ ...form, prescription: data.response });
        console.log(data);
        setIsLoading(false);
        return data;
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    /*const handleGenerateHelpNearbyy = async () => {
      const prompt = {
        prompt: form.description,
      };
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/chat/context', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(prompt),
        });
        const data = await response.json();
        setForm({ ...form, prescription: data.response });
        console.log(data);
        setIsLoading(false);
        return data;
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };*/

  useEffect(() => {
    fetchUserById();
    fetchDescription();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{padding: "10px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PrevDescription descriptions={descriptions}/>
      </div>
      <div style={{ display: 'flex' }}>
        <div>
          <CardInfo user={user} />
        </div>
        <div>
          <p>Descripción</p>
          <textarea
            label="Descripcion"
            value={form.description}
            name="description"
            onChange={handleInputChange}
          />
          <p>Prescripción</p>
          <textarea
            label="Prescription"
            value={form.prescription}
            name="prescription"
            onChange={handleInputChange}
          />
          <div>
            <button
              style={{
                height: '50px',
                width: '180px',
                backgroundColor: '#399C7E',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '10px',
                fontWeight: 'bold',
                textAlign: 'center',
                borderRadius: '5px',
              }}
              disabled={isLoading}
              onClick={handleGenerateHelp}
            >
              <p>{isLoading ? 'Cargando' : 'Generar Prescripción'}</p>
            </button>
          </div>
          <div>
            <button
              style={{
                height: '50px',
                width: '180px',
                backgroundColor: '#399C7E',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '10px',
                fontWeight: 'bold',
                textAlign: 'center',
                borderRadius: '5px',
              }}
              disabled={isLoading}
              onClick={handlePostDescription}
            >
              <p>{isLoading ? 'Cargando' : 'Guardar Respuesta'}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;