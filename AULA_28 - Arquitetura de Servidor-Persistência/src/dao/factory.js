import mongoose from "mongoose";
import { config } from "dotenv";

config(); 

export let Contacts;

async function initContacts() {
    switch(process.env.PERSISTENCE) {
        case "MONGO":
            await mongoose.connect('mongodb://localhost:27017/Aula28');
            const { default: ContactsService } = await import('./mongo/ContactsService.js');
            Contacts = ContactsService;
            break;
        case "MEMORY":
            const { default: ContactsMemory } = await import('./mongo/memory/contacts.memory.js');
            Contacts = ContactsMemory;
            break;
        default:
            throw new Error('Nenhum tipo de banco de dados válido foi configurado.');
    }
}

await initContacts();
