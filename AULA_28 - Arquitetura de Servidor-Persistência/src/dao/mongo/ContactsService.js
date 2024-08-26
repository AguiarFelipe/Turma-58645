import ContactsModel from './models/contacts.js';

class ContactsService {
    async get() {
        return await ContactsModel.find({});
    }

    async create(contactData) {
        return await ContactsModel.create(contactData);
    }
}

export default ContactsService;
