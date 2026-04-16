import { useState } from 'react';

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

  return <div>Hello</div>;
}

export default ContactIndex;
