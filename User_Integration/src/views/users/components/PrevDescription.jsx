
const PrevDescription = ({ descriptions }) => {
    console.log(descriptions);
    return (
      <div>
        {descriptions?.map((des, idx) => (
          <p key={idx}>{des.description}{des.prescription}</p>
        ))}
      </div>
    );
}; 

export default PrevDescription;