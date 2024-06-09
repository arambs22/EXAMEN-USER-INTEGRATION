/* eslint-disable react/prop-types */
import male from '../../../assets/male.svg';
import female from '../../../assets/female.svg';

const CardInfo = ({user}) => {
  return (
    <div
        style={{
            width: "250px", 
            height:"400px", 
            backgroundColor: "white",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
            borderRadius: "10px"
        }}
    >
        <img src={user.sex === 'M' || user.sex === 'O' ? male : female} width={50} alt="user" />
        <p>Nombre</p>
        <p>{user.name}</p>
        <p>Email</p>
        <p>{user.email}</p>
        <p>Edad</p>
        <p>{user.age}</p>
        <p>Domicilio</p>
        <p>{user.address}</p>
        <p>Sexo</p>
        <p>{user.sex}</p>
        <p>Teléfono</p>
        <p>{user.tel}</p>
    </div>
  )
}

export default CardInfo;