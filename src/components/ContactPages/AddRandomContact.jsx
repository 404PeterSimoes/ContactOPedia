import getRandomUser from '../utility/api';

function AddRandomContact() {
  const getRandomContact = async () => {
    const user = await getRandomUser();
    console.log(user);
  };

  return (
    <button className="btn btn-success form-control" onClick={getRandomContact}>
      Add Random Contact
    </button>
  );
}

export default AddRandomContact;
