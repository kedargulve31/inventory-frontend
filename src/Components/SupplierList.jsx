import axios from "axios";
import { useState, useEffect } from "react";
import SupplierForm from "./SupplierForm";
import { useNavigate } from "react-router-dom";

export default function SupplierList() {
  const [data, setData] = useState([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
const fetchData = () =>{
      setTimeout(async () => {
            const res = await axios.get("http://localhost:3110/getSuppliers");
            console.log(res);
            setData(res.data?.message);
          }, 1000);
}

  useEffect(() => {
    fetchData()
  }, []);

const handleAddSuppliers = ()=>{
      setShowAddProduct(true)
      fetchData()
}

const handleSubmit = async (data) =>{
  await axios.post('http://localhost:3110/addSuppliers' ,data)
  fetchData()
}
const navigate = useNavigate()

const onbutton =()=>{
      navigate('/dashboard')
} 

  return (
    <>
<div className="header2">
      <h2>Suppliers</h2>
      <div className="btn-container">
      <button onClick={handleAddSuppliers}>Add Suppliers</button>
      <button onClick={onbutton}>Dashboard</button>
      </div>

     
</div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{item.Id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Contact || "Not provided"}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      {
            showAddProduct && <SupplierForm onSubmit={handleSubmit} onClose={() => setShowAddProduct(false)}/>
      }
    </>
  );
}
