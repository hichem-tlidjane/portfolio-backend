import * as contactService from "../services/contact.service.js"

export const sendContact = async(req, res, next) =>{
    const {name, email, message} = req.body
      await contactService.sendContactEmail({name, email, message});
    res.status(200).json({ message: 'Email envoyé avec succès' })
};
