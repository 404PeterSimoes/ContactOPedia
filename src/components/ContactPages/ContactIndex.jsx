import { useState } from 'react';
import FavouriteContacts from './FavouriteContacts';
import GeneralContacts from './GeneralContacts';
import AddContact from './AddContact';

function ContactIndex() {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: 'Ben Parker',
      phone: '666-666-7770',
      email: 'ben@bi4all.pt',
      isFavourite: false,
    },
    {
      id: 2,
      name: 'Kathy Patrick',
      phone: '111-222-0000',
      email: 'kathy@bi4all.pt',
      isFavourite: true,
    },
    {
      id: 3,
      name: 'Paul Show',
      phone: '999-222-1111',
      email: 'paul@bi4all.com',
      isFavourite: true,
    },
  ]);

  function handleToggleFavourites(contact) {
    setContactList((prevState) => {
      return prevState.map((obj) => {
        if (obj.id == contact.id) {
          return { ...obj, isFavourite: !obj.isFavourite };
        } else {
          return obj;
        }
      });
    });
  }

  function handleAddContact(newContact) {
    // Validation
    const duplicateRecord = contactList.filter((x) => {
      if (x.name == newContact.name && x.phone == newContact.phone) {
        return true;
      }
    });

    if (duplicateRecord.length > 0) {
      return { status: 'error', msg: 'Duplicate record.' };
    }

    const newFinalContact = {
      ...newContact,
      id:
        contactList.length > 0 ? contactList[contactList.length - 1].id + 1 : 1,
      isFavourite: false,
    };

    setContactList((prevState) => {
      return prevState.concat([newFinalContact]);
    });

    return { status: 'success', msg: 'Contact was added successfully' };
  }

  function handleDeleteContact(contactId) {
    console.log(contactId);

    setContactList((prevState) => {
      return prevState.filter((obj) => {
        if (obj.id !== contactId) {
          return true;
        } else return false;
      });
    });
  }

  function handleRemoveAllContacts() {
    setContactList([]);
  }

  return (
    <div className="container" style={{ minHeight: '85vh' }}>
      <div className="py-3">
        <div className="row py-2">
          <div className="col-6">ADD CONTACT</div>
          <div className="col-6">
            <button
              className="btn btn-danger form-control"
              onClick={handleRemoveAllContacts}
            >
              Remove All
            </button>
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <AddContact handleAddContact={handleAddContact} />
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <FavouriteContacts
              favouriteClick={handleToggleFavourites}
              deleteClick={handleDeleteContact}
              contacts={contactList.filter((u) => u.isFavourite == true)}
            />
          </div>
        </div>
        <div className="py-2">
          <div className="coo-12">
            <GeneralContacts
              favouriteClick={handleToggleFavourites}
              deleteClick={handleDeleteContact}
              contacts={contactList.filter((u) => u.isFavourite == false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactIndex;
