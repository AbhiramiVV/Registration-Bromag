import React, { useEffect, useState } from "react";
  import { NavLink, useParams, useNavigate } from "react-router-dom";
  import axios from "axios";
  
  function EmployeeView() {
     const {id}= useParams();
     const navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [addnumber, setAddnumber] = useState("");
    const [pannumber, setPannumber] = useState("");
    const [pfnumber, setPfnumber] = useState("");
    const [uannumber, setUannumber] = useState("");
    const [contnum, setContnum] = useState("");
    const [mobile, setMobile] = useState("");
    const [paddress, setPaddress] = useState("");
    const [files, setFiles] = useState("");

      useEffect(() => {
        const viewEmployeesingle = async () => {
          try {
            const res = await axios.get(`/singleEmployee/${id}`);
            const Employeesingle = res.data;
            setName(Employeesingle.name);
            setAddress(Employeesingle.address);
            setEmail(Employeesingle.email);
            setGender(Employeesingle.gender);
            setAddnumber(Employeesingle.addnumber);
            setPannumber(Employeesingle.pannumber);
            setPfnumber(Employeesingle.pfnumber);
            setUannumber(Employeesingle.uannumber)
            setContnum(Employeesingle.contnum);
            setMobile(Employeesingle.mobile)
            setPaddress(Employeesingle.paddress)
            setFiles(Employeesingle.image)
          } catch (error) {
            console.log(error);
          }
        };
        viewEmployeesingle();
      }, [id]);
      return (
        <>
          <div className="flex gap-24 bg-white">
            
    
            <div class="flex flex-col md:lg:xl:flex-row bg-white">
              <div class="h-full w-full md:lg:xl:w-1/2 bg-white flex flex-wrap justify-center content-center">
                {/* <div class="h-screen w-screen md:lg:xl:w-1/2 bg-white flex flex-wrap justify-center content-center shadow-2xl "> */}
    
                <div class="bg-white p-8 rounded-xl w-96 shadow-2xl mx-auto flex flex-col items-center justify-center" >
                  <div class="flex justify-between mb-4 text-center mx-auto">
                    <div>
                      <img
                      src={files}
                        className="w-32 rounded-full mx-auto"
                        alt="Avatar"
                      />
                      <p class="text-lg font-semibold text-neutral-700">{name}</p>
                      <p class="mt-0.5  text-black text-md">
                        <span className="text-black font-extrabold">Address:</span>
                        {address}
                      </p>
                      <p class="mt-0.5  text-black text-md">
                        <span className="text-black font-extrabold">Email:</span>
                        {email}
                      </p>
                      <p class="mt-0.5  text-black text-md">
                        <span className="text-black font-extrabold">Mobile:</span>
                        {mobile}
                      </p>
                      <p class="mt-0.5  text-black text-md">
                        <span className="text-black font-extrabold">Gender:</span>
                        {gender}
                      </p>
                      <p class="mt-0.5  text-black text-md">
                        <span className="text-black font-extrabold">Adhar Number:</span>
                        {addnumber}
                      </p>
                     
                      <p class="mt-0.5  text-black text-md">
                        <span className="text-red-900 font-extrabold">Pan Number:</span>{" "}
                        {pannumber}
                      </p>
                      <p class="mt-0.5  text-black text-md">
                        <span className="text-red-900 font-extrabold">PF Number:</span>{" "}
                        {pfnumber}
                      </p>
                      <p class="mt-0.5  text-black text-md">
                        <span className="text-red-900 font-extrabold">UAN Number:</span>{" "}
                        {uannumber}
                      </p>
                      <p class="mt-0.5  text-black text-md">
                        <span className="text-red-900 font-extrabold">Contact Number:</span>{" "}
                        {mobile}
                      </p>
                   
                      <div className="mt-4">
                <button
                  onClick={() => navigate("/")} 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Go Back
                </button>
              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  
  export default EmployeeView
  
