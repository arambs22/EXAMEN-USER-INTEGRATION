import { useNavigate } from 'react-router-dom';
import male from '../../../assets/male.svg';
import female from '../../../assets/female.svg';
import './Card.css';

const Card = ({ user }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div className='card' onClick={handleClick}>
      <div style={{ paddingRight: '15px' }}>
        <img src={user.sex === 'M' || user.sex === 'O' ? male : female} width={50} alt="user" />
      </div>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Card;