
import { useForm } from "react-hook-form"

export default function SupplierForm({onSubmit,onClose}){

      const{register,handleSubmit , formState:{errors} ,reset} = useForm()


     
  const submitForm = (data) => {
      onSubmit(data);
      reset(); 
      onClose(); 
    };
 







      return(
      <>
      
<div className="modal-overlay">

<form onSubmit={handleSubmit(submitForm)} style={{height:'280px'}}>
<h3 style={{marginBottom:'35px', fontWeight:'600px'}}>Add Suppliers</h3>
<div className="input-filed">
      <label htmlFor="">Name</label>
    <input type="text" {...register('Name',{required:'Supplier Name is required'})} />
</div>
<div className="input-filed">
      <label htmlFor="">Contact</label>
      <input type="number"{...register('Contact' , {required:'Contact is required'})} />
</div>
{
      errors && <p className= 'error' style={{fontWeight:'bold',color:'red'}}>{Object.values(errors)[0]?.message}</p>
  }
<button type="submit">Submit</button>
<button type="button" onClick={onClose}>Cancel</button>

</form>
</div>



      </>
)


}