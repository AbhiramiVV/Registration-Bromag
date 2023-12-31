import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  address:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    required:true
  },
  mobile: {
    type: String,
    required: true,
  },
  Aadharnum: {
    type: String,
    required: true,
  },
  pannumber: {
    type: String,
    required: true,
  },
  pfnumber: {
    type: String,
    required: true,
  },
  uannumber:{
    type: String,
    required: true,
  },
  contactadd: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  maritalstatus: {
    type: String,
    required: true,
  },
  esinum: {
    type: String,
    required: true,
  },
  bloodgroup: {
    type: String,
    required: true,
  },
  image:{
    type:String,
    required:true
    
  }

});

const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;
