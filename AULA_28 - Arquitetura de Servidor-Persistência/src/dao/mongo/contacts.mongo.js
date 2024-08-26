import contactsModel from './memory/contacts.memory.js';
export default class Contacts{
    constructor(){
        this.contacts = new contactsModel()
    }
    get = async()=>{
        let contacts = await this.contacts.find();
        return contacts;
    }
}