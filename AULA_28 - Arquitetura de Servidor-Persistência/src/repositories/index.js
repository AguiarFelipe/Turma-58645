import ContactRepository from "./contacts.repository.js";
import { Contacts } from "../dao/factory.js";

export const contactsService = new ContactRepository(new Contacts())
