import cloudinary from "../config/cloudinary.js";
import Registration from "../models/Registration.js";

export async function postAddEmployee(req, res) {
  try {
    const { name,gender,address,email,mobile,addnumber,pannumber,pfnumber,uannumber,paddress,dob,mtStatus,esinum,group,files } = req.body;
    let picture;
    if (files) {
      picture = (await cloudinary.uploader.upload(files)).secure_url;
    }
    await Registration.create({
      Name:name,
      email:email,
      gender:gender,
      mobile:mobile,
      address:address,
      Aadharnum:addnumber,
      pannumber:pannumber,
      pfnumber:pfnumber,
      uannumber:uannumber,
      contactadd:paddress,
      dob:dob,
      maritalstatus:mtStatus,
      esinum:esinum,
      bloodgroup:group,
      image:picture
    }).then((result)=>{
      console.log(result);
    })
    res.status(200).json({ message: "successfully added" });

    
  } catch (error) {
    console.log(error.message);

  }
}

export async function getEmployee(req,res){
  try {
    const allEmployee=await Registration.find()
    console.log(allEmployee);
    res.status(200).json({data:allEmployee,verified:true});
  } catch (error) {
    res.status(401).json({ err: "nothing to display" });

    
  }

}