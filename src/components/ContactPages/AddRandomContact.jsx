import getRandomUser from '../utility/api';

function AddRandomContact() {
  const getRandomContact = async () => {
    const response = await getRandomUser();
    if (response && response.results && response.results.length > 0) {
      const user = response.results[0];
      const formattedUser = {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
      };
      console.log(formattedUser);
    }
  };

  return (
    <button className="btn btn-success form-control" onClick={getRandomContact}>
      Add Random Contact
    </button>
  );
}

export default AddRandomContact;
