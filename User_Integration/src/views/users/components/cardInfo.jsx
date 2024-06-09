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
            borderRadius: "10px",
            padding: "15px",
            border: "1px solid #e0e0e0",
            overflowY: "scroll",
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none', 
            fontSize: "14px",
        }}
    >
        <div style={{display: "flex", justifyContent: "center"}}>
          <img src={user.sex === 'M' || user.sex === 'O' ? male : female} width={100} alt="user" style={{padding: "10px"}}/>
        </div>

        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Edad: {user.age}</p>
        <p>Domicilio: {user.address}</p>
        <p>Sexo: {user.sex}</p>
        <p>Teléfono: {user.tel}</p>

    </div>
  )
}

export default CardInfo;