import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmployeeAdd() {
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
  const [dob, setDob] = useState("");
  const [mtStatus, setMtstatus] = useState("");
  const [files, setFiles] = useState("");
  const [esinum, setEsinum] = useState("");
  const [group, setGroup] = useState("");
  const [imageError, setImageError] = useState(false);

  const navigate = useNavigate();

  const addEmployee = async (e) => {
    e.preventDefault();
    if (!name || !gender || !address || !email || !mobile || !addnumber || !pannumber || !pfnumber || !uannumber || !paddress || !dob || !mtStatus || !esinum || !group || !contnum || !files) {
    
      toast.error("Please fill in all the required fields");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("gender", gender);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("addnumber", addnumber);
    formData.append("pannumber", pannumber);
    formData.append("pfnumber", pfnumber);
    formData.append("uannumber", uannumber);
    formData.append("paddress", paddress);
    formData.append("dob", dob);
    formData.append("mtStatus", mtStatus);
    formData.append("esinum", esinum);
    formData.append("group", group);
    formData.append("contnum", contnum);
    formData.append('files',files)

    
    try {
      const response = await axios.post("/addEmployee", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
      if (response.data.message) {
        toast.success('Employee added successfully.');
        navigate("/");


      }
    } catch (error) {
      console.error(error);
    }
  };
  const readFileSync = (file) => {
    return new Promise((resolve, reject) => {

      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        resolve(base64String);
      };

      reader.onerror = () => {
        reject(new Error("Failed to read file"));
      };

      reader.readAsDataURL(file);
    });
  };


  const handleImageChange = (e) => {
    const selectedFiles = e.target.files;
  
    if (selectedFiles.length > 0) {
      const file = selectedFiles[0];
  
      readFileSync(file)
        .then((base64String) => {
            setFiles(base64String)
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };
  



  return (
    <div className="flex gap-24">
      <div className="py-2">
        <section className="py-1 bg-blueGray-50">
          <div className="w-full lg:w-full px-4 mx-auto mt-6">
            <form onSubmit={addEmployee} encType="multipart/form-data">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-l-emerald-900">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-center">
                    <h6 className="text-blueGray-700 text-xl font-bold">
                      ADD EMPLOYEE BASIC DETAILS
                    </h6>
                  </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-4">
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
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

                  <div className="flex flex-wrap mt-4">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
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
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full px-4">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          name="number"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full px-4">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Addhar Number
                        </label>
                        <input
                          type="number"
                          name="addnumber"
                          value={addnumber}
                          onChange={(e) => setAddnumber(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full px-4">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Pan Number
                        </label>
                        <input
                          type="number"
                          name="pannumber"
                          value={pannumber}
                          onChange={(e) => setPannumber(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full px-4">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          PF Number
                        </label>
                        <input
                          type="number"
                          name="pfnumber"
                          value={pfnumber}
                          onChange={(e) => setPfnumber(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative w-full px-4">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
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
                            htmlFor="grid-password"
                          >
                            Emergency contact Person Address
                          </label>
                          <input
                            type="text"
                            name="type"
                            value={paddress}
                            onChange={(e) => setPaddress(e.target.value)}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-8">

                    
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="dob"
                        >
                          Date Of Birth
                        </label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Marital Status
                        </label>
                        <input
                          type="text"
                          name="mtStatus"
                          value={mtStatus}
                          onChange={(e) => setMtstatus(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          ESI Number
                        </label>
                        <input
                          type="text"
                          name="esinum"
                          value={esinum}
                          onChange={(e) => setEsinum(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Blood Group
                        </label>
                        <input
                          type="text"
                          name="group"
                          value={group}
                          onChange={(e) => setGroup(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Emergency Contact Person Number
                        </label>
                        <input
                          type="text"
                          name="contnum"
                          value={contnum}
                          onChange={(e) => setContnum(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>

                    <div className="relative w-full mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Upload Images
                      </label>
                      <input
                        type="file"
                        name="files"
                        multiple
                        onChange={handleImageChange}
                        accept="image/*"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                      {imageError && (
                        <p className="text-red-500 text-xs mt-1">
                          Please select valid image files (jpg, jpeg, png)
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center mt-6">
                      <button
                        className="text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg"
                        type="submit"
                      >
                        Submit Form
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <ToastContainer />

          </div>
        </section>
      </div>
    </div>
  );
}

export default EmployeeAdd;
