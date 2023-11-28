import React, { useEffect, useState } from 'react'

import axios from 'axios'
import {useNavigate,useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmployeeEdit() {
  const {id}=useParams();
  const Navigate=useNavigate()
  
  console.log(id)
  const [Name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [addnumber, setAddnumber] = useState("");
  const [pannumber, setPannumber] = useState("");
  const [pfnumber, setPfnumber] = useState("");
  const [uannumber, setUannumber] = useState("");
  const [contnum, setContnum] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [mtStatus, setMtstatus] = useState("");
  const [esinum, setEsinum] = useState("");
  const [group, setGroup] = useState("");


  useEffect(()=>{
      const fetchEmployee=async()=>{
          const response = await axios.get(`/singleEmployee/${id}`);
          const employee=response.data;
          setName(employee.Name);
          setAddress(employee.address);
          setEmail(employee.email);
          setGender(employee.gender);
          setAddnumber(employee.Aadharnum)
          setPfnumber(employee.pfnumber)
          setUannumber(employee.uannumber)
  setPannumber(employee.pannumber)

          setMobile(employee.mobile)
          setDob(employee.dob)
          setMtstatus(employee.maritalstatus)
          setEsinum(employee.esinum)
          setGroup(employee.bloodgroup)

      }
      fetchEmployee();
      

  },[id]);

const updateEmployee=async(e)=>{
  e.preventDefault()
  if (!Name || !address || !email || !gender || !addnumber || !pannumber || !pfnumber || !uannumber || !mobile || !dob || !mtStatus || !esinum || !group) {
    toast.error('Please fill in all the required fields');
    return;
  }
  const updateEmploye={Name,address,email,gender,addnumber,pfnumber,uannumber,contnum,mobile,dob,mtStatus,esinum,group};
  await axios.put(`/employeeEdit/${id}`,updateEmploye)
  toast.success('Employee updated successfully');

  Navigate("/")
  
}

return (
  <div>
      <div className='flex gap-24'>
      
    <div className="py-2">
        <section className=" py-1 bg-blueGray-50 ">
          <div className="w-full lg:w-full px-4 mx-auto mt-6">
            <form onSubmit={updateEmployee} encType="multipart/form-data">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-l-emerald-900">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-center">
                    <h6 className="text-blueGray-700 text-xl font-bold">
                      EMPLOYEE MANAGEMENT
                    </h6>
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-4">
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={Name}
                          onChange={(e) => setName(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                   
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password"
                        >
                        Address
                        </label>
                        <input
                          type="text"
                          value={address}
                          name="address"
                          onChange={(e) => setAddress(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password"
                        >
                        Email
                        </label>
                        <input
                          type="text"
                          value={email}
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password"
                        >
                          Gender
                        </label>
                        <input
                          type="text"
                          name="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password"
                        >
                          Aadhar Number
                        </label>
                        <input
                          type="text"
                          name="addnumber"
                          value={addnumber}
                          onChange={(e) => setAddnumber(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          PAN number
                        </label>
                        <textarea
                          name="pannumber"
                          value={pannumber}
                          onChange={(e) => setPannumber(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password"
                        >
                          UAN Number
                        </label>
                        <input
                          type="number"
                          name="uannumber"
                          value={uannumber}
                          onChange={(e) => setUannumber(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
               
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="number"
                          name="mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password"
                        >
                          DOB
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password"
                        >
                          Marital Status
                        </label>
                        <input
                  
                          name="mtStatus"
                          value={mtStatus}
                          onChange={(e) => setMtstatus(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password"
                        >
                          ESI Number
                        </label>
                        <input
                          type="number"
                          name="esinum"
                          value={esinum}
                          onChange={(e) => setEsinum(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlfor="grid-password"
                        >
                          Blood Group
                        </label>
                        <input
                        
                          name="group"
                          value={group}
                          onChange={(e) => setGroup(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>


{/* 
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2 mt-5"
                          htmlFor="image-upload"
                        >
                          Upload Image
                        </label>
                        <input
                          type="file"
                          id="image"
                          
                          name="image"
                          accept="image/*"
                          multiple={true}
      
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                        
                      </div>
                    </div> */}
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
              </div>
              <div className="button flex justify-center">
                <button
                  className="bg-black text-white active:bg-pink-600 font-bold uppercase text-xl px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
    <ToastContainer />
  </div>
);
}

export default EmployeeEdit