
const {Contact}= require('../models/contact')

const { HttpError, ctrlWrapper } = require('../helpers');



const listContacts = async (req, res) => {
    const { _id: owner } = req.user;
    const {page = 1, limit = 20} = req.query;
    const skip = (page - 1) * limit;
    const result = await Contact.find({owner} ,'-createdAt -updatedAt',{skip,limit}).populate("owner", "name email");
    res.status(200).json(result)  
}

const getContactById = async (req, res) => { 
    const {id} = req.params;
    const result = await Contact.findById(id);
    if (!result) {
       throw HttpError(404, "Non found");    
    }
     res.status(200).json(result);   
}

const addContact = async (req, res) => {  
    const {_id: owner } = req.user;
        const result = await Contact.create({...req.body, owner});
    res.status(201).json(result); 
}

const removeContact = async (req, res) => { 
    const {id} = req.params;
    const result = await Contact.findByIdAndRemove(id);
     if(!result) {
        throw HttpError(404, "Not found");
    }
    console.log(result)
        res.json({ message: 'contact deleted' }) 
}

const updateContact = async (req, res) => {       
        const {id} = req.params;
        const result = await Contact.findByIdAndUpdate(id, req.body, {new:true});
        if(!result) {
            throw HttpError(404, "Not found");
        }
        res.json(result); 
}

const updateStatusContact = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
}

module.exports = {
    listContacts: ctrlWrapper(listContacts),
    getContactById: ctrlWrapper(getContactById),
    addContact: ctrlWrapper(addContact),
    updateStatusContact: ctrlWrapper(updateStatusContact),
    removeContact: ctrlWrapper(removeContact),
    updateContact: ctrlWrapper(updateContact)
}