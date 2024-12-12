
import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

export default function ProductList() {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
      setLoading(true)
    const response = await axios.get("http://localhost:3110/getProducts");
    setData(response.data.message);
    setLoading(false)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProduct = () => {
    setSelectedProduct(null); 
    setShowAddProduct(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setShowAddProduct(true);
  };

  const handleDeleteProduct = async (id) => {
    await axios.delete(`http://localhost:3110/deleteProduct/${id}`);
    fetchData(); 
  };

  const handleFormSubmit = async (productData) => {
    if (selectedProduct) {
      await axios.put(`http://localhost:3110/updateProducts/${selectedProduct.Id}`, productData);
    } else {
      await axios.post("http://localhost:3110/addProducts", productData);
    }
    setShowAddProduct(false);
    fetchData();
  };

  const getRowColor = (quantity, reorderLevel) => {
    if (quantity === 0) return "red";
    if (quantity <= reorderLevel) return "yellow";
    return "green";
  };

const navigate = useNavigate()

 const  onbutton = ()=>{
navigate('/dashboard')
 }

  return (
    <>
      <div className="header2">
        <h2>Products</h2>
        <div className="btn-container">
        <button onClick={handleAddProduct}>Add Product</button>
        <button onClick={onbutton}>Dashboard</button>
        </div>
        
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Reorder Level</th>
            <th>Status</th>
            <th className="actions-column"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              style={{ backgroundColor: getRowColor(item.Quantity, item.ReorderLevel) }}
            >
              <td>{item.Id}</td>
              <td>{item.Name}</td>
              <td>{item.Sku}</td>
              <td>{item.Quantity}</td>
              <td>{item.Price}</td>
              <td>{item.ReorderLevel}</td>
              <td>
                {item.Quantity === 0
                  ? "Out of stock"
                  : item.Quantity <= item.ReorderLevel
                  ? "Low stock"
                  : "In stock"}
              </td>
              <td className="actions-column">
                <button onClick={() => handleEditProduct(item)}>Update</button>
                <button onClick={() => handleDeleteProduct(item.Id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAddProduct && (
        <ProductForm
          onSubmit={handleFormSubmit}
          initialData={selectedProduct}
          onClose={() => setShowAddProduct(false)}
        />
      )}
    </>
  );
}
