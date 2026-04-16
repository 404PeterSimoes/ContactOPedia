import Contact from './Contact';

function FavouriteContacts() {
  return (
    <div
      className="col-12 p-2"
      style={{ borderRadius: '10px', backgroundColor: '#323637' }}
    >
      <div className="text-center text-white-50">Favourites</div>
      <div className="p-2">
        <Contact />
      </div>
    </div>
  );
}

export default FavouriteContacts;
