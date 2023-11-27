import React ,{useEffect,useState}from 'react'
import { Link, NavLink } from 'react-router-dom';
import Basetable from '../Pages/Basetable';
import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import axios from 'axios'

function Home() {
 
    const[employee,setEmployee]=useState([])
    const [search, setsearch] = useState("");
    const [filteredAdmin, setFilteredAdmin] = useState([]);
  const [loading, setloading] = useState(true);
  
    const fetchEmployee= async () => {
      try {
        const response = await axios.get('/getEmployee');
        const { message, data } = response.data;
        console.log('Successful');
        setEmployee(data);
        setFilteredAdmin(data);

      setloading(false);
      } catch (error) {
        console.error('Error fetching catering view:', error);
      }
    };
    const handleDelete = async (id) => {
        try {
          const confirmResult = await Swal.fire({
            title: 'Are you sure?',
            text: 'You are about to delete the employee. This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
          });
      
          if (confirmResult.isConfirmed) {
            await axios.delete(`/removeEmployee/${id}`);
            await fetchEmployee();
            toast.success('Employee deleted successfully.');
          }
        } catch (error) {
          console.log(error);
          toast.error('Failed to delete employee category.');
        }
      };
       
    useEffect(() => {
      fetchEmployee();
    }, []);
   

    useEffect(() => {
        setFilteredAdmin(
            employee.filter((cat) =>
            cat.name.toLowerCase().includes(search.toLowerCase())
          )
        );
      }, []);
    

    const columns=[
      {
          name:"#",
          cell:(row,index)=><div>{index+1}</div>,
      },
      {
        name: 'Image',
        selector: (row) => (
          <img
            width={90}
            height={90}
            src={row.image}
            alt={row.name}
          />
        ),
      },
      {
          name:" Staff Name",
          selector:(row)=>row.Name,
          sortable:true
      },
      {
        name:"Phone Number",
        selector:(row)=>row.mobile,
        sortable:true

      },
      {
        name:"Current address",
        selector:(row)=>row.address,
        sortable:true

      },
      {
        name:"Email id",
        selector:(row)=>row.email,
        sortable:true

      },
     
      
      {
          name:"View",
          selector:(row)=>
          <NavLink to={`/singleEmployee/${row._id}`}><button className='bg-green-900  text-white font-bold py-2 px-4 rounded'><i className='fa fa-eye' />View</button></NavLink>


      },
      {
          name:"Edit",
          selector:(row)=>
          <NavLink to={`/editEmployee/${row._id}`}><button className='bg-green-900  text-white font-bold py-2 px-4 rounded'><i className='fa fa-pencil' />Edit</button></NavLink>
      },
      {
        name:"Remove",
        selector:(row)=><button onClick={()=>handleDelete(row._id)} className='bg-red-900  text-white font-bold  py-2 px-4 rounded'><i class="fa-solid fa-trash-can">Delete</i></button>
    },
      
      
  ];
 
 
return (
  <div>
     <>
     
          <div className='flex gap-24 mx-auto'>
            
              <div className='d-flex w-8/12 flex-column align-items-center mx-auto'>
              <div className="flex justify-end">
              <button class="bg-green-900  text-white font-bold py-2 px-4 rounded-full mt-5 mb-5">
              <NavLink style={{zIndex:'9999',position:'relative'}} to="/add">
          ADD NEW EMPLOYEES
        </NavLink>
        </button>
            
        </div>
        {loading ? (
              <div className="loader-container absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                <ClipLoader color={"#808080"} size={150} />
              </div>
            ) : (
                  <Basetable
                      columns={columns}
                       data={employee}
                      title={"Employee Management"}
                      pagination
                      fixedHeader
                      HighlightOnHover
                      subHeader
                      subHeaderComponent={
                          <input
                              type="text"
                              placeholder="Search"
                              className="shadow appearance-none border rounded  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black "
                              value={search}
                              onChange={(e) => setsearch(e.target.value)}
                          />
                      }
                  />
                  )}
              </div>
          </div>
      </>
      </div>

)
}



export default Home
