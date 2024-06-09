import Form from './components/form';
import register from '../../assets/register.svg';
import NavigationBar from '../../shared/NavigationBar';

const Register = () => {
  return (
    <NavigationBar>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            height: '87vh',
            width: '75vw',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={register} alt="formImage" width={600} />
        </div>
        <div style={{ width: '70%' }}>
          <Form/>
        </div>
      </div>
    </NavigationBar>
  );
};

export default Register;