import { Router } from "express";
import { Contacts } from "../dao/factory.js";
import ContactDTO from "../dto/contacts.dto.js";

const router = Router();
const contactsService = new Contacts();

router.get('/', async(req, res) => {
    let result = await contactsService.get();
    res.send({ status: "Success", message: result });
});

router.post('/', async(req, res) => {
    let { name, last_name, phone } = req.body;
    let contact = new ContactDTO({ name, last_name, phone });
    
    let result = await contactsService.create(contact);
    res.send({ status: "Success", message: result });
});

export default router;
