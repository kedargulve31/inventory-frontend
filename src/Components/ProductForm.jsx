
import { useForm } from "react-hook-form";

export default function ProductForm({ onSubmit, initialData, onClose }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialData || { Name: "", Sku: "", Quantity: "", ReorderLevel: "", Price: "" },
  });

  const submitForm = (data) => {
    onSubmit(data);
    reset(); 
    onClose(); 
  };

  return (
    <>
    <div className="modal-overlay">

    <form className="my-form" onSubmit={handleSubmit(submitForm)} style={{height:'450px', position:'absolute' ,top:'20%' ,left:'40%'} }>
    <h3 style={{marginBottom:'15px', fontWeight:'600px'}}>Add Products</h3>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input {...register("Name")} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="Sku">SKU</label>
          <input {...register("Sku")} type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="Quantity">Quantity</label>
          <input {...register("Quantity")} type="number" />
        </div>
        <div className="form-group">
          <label htmlFor="ReorderLevel">Reorder Level</label>
          <input {...register("ReorderLevel")} type="number" />
        </div>
        <div className="form-group">
          <label htmlFor="Price">Price</label>
          <input {...register("Price")} type="number" />
        </div>
        <button type="submit" className="submit-button">Submit</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
     
    </>
  );
}
