export default class Contacts {
    constructor(){
        this.data = [];
    }
    get = async()=>{
        return this.data;
    }

    create = async(contactData)=>{
        this.data.push(contactData);
    }
}