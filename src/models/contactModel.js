import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  
    email: {
        type: String,
        required: [true, "Please provide a email"],
        
    },
    subject: {
        type: String,
        required: [true, "Please provide subject"],
    },
    message: {
        type: String,
        required: [true, "Please provide a message"],
    },
},
{
    timestamp: true,

})

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default  Contact;