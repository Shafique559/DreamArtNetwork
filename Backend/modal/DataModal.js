import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    coursename: { type: String, required: true },
    studentname: { type: String, required: true },
    fathername: { type: String, required: true },
    cnic: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Example CNIC validation, adjust this as per your requirements
                return /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/.test(v);
            },
            message: props => `${props.value} is not a valid CNIC number!`
        }
    },
    dateofbirth: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Date validation, assuming format 'MM-DD-YYYY'
                return /\d{4}-\d{2}-\d{2}/.test(v);
            },
            message: props => `${props.value} is not a valid date format (YYYY-MM-DD)!`
        }
    },
    gender: { type: String, required: true },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Example phone number validation for a Pakistani number
                return /^(\+92|0)?[0-9]{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    whatsapp: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Example phone number validation
                return /^(\+92|0)?[0-9]{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid WhatsApp number!`
        }
    },
    address: { type: String, required: true },
    payment: { type: String, required: true },
    tid: { type: String, required: true, unique: true }
}, { timestamps: true });  // Add timestamps for tracking creation and update

const Data = mongoose.model('Data', dataSchema);

export default Data;
