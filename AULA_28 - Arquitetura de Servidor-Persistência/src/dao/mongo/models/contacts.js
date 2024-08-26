import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ContactSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    active:{
        type:Boolean,
        required:true
    }
});

const ContactsModel = model('Contact', ContactSchema);

export default ContactsModel;
