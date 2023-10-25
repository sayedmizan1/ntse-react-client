import { useContext, useState } from "react";
import "./RelatedProducts.scss";
import { Context } from "../../../utils/context";
import { redirect, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const RelatedProducts = () => {
  const [quantity, setQuantity] = useState(1);
  const { handleAddToCart, createNewOrder } = useContext(Context);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  //input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [address, setAddress] = useState("");
  const [olympiad, setOlympiad] = useState("");

  const dataOrder = JSON.stringify({
    data: {
      name: name,
      email: email,
      phoneno: phoneno,
      address: address,
      olympiad: olympiad,
    },
  });
  const handleCreateNewOrder = (e) => {
    e.preventDefault();
    createNewOrder(dataOrder);
    
    alert(
      `Your form has been submitted succesfully click on pay button to register succesfully,`
    );
 
  };

  let navigate = useNavigate();
  const routeChange = () => {
    //   let path = "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=5891614";
    window.location.replace(
      "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=5891614"
    );
  };

  if (!data) return;
  const product = data?.data?.[0]?.attributes;

  let order = product.title;
  return (
    <section className="body1">
      <section className="container">
        <header style={{ marginBottom: "20px" }}>Registration Form</header>
        <span style={{ color: "red" }}>
          Please Fill all details correctly if you make any mistake we are not
          responsible
        </span>
        <form action="#" className="form">
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="Enter phone number"
                onChange={(e) => setPhoneno(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <label>Birth Date</label>
              <input type="date" placeholder="Enter birth date" required />
            </div>
          </div>
          <div className="input-box">
          <label>Olympiad Name</label>
       <input
         type="text"
         placeholder="Enter Olympiad Name"
         onChange={(e) => setOlympiad(e.target.value)}
         required
       />
     </div>
          <div className="input-box address">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter street address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter street address line 2"
              required
            />
            <div className="column">
              <div className="select-box">
                <select>
                  <option hidden>Country</option>
                  <option selected="selected">India</option>
                </select>
              </div>
              <input type="text" placeholder="Enter your city" required />
            </div>
            <div className="input-box address">
              Reg Number Below
              <input type="text" placeholder={phoneno} readOnly />
              <input type="number" placeholder="Enter postal code" required />
            </div>
            <div className="column">
              <div className="select-box">
                <select>
                  <option hidden>Price</option>
                  <option selected="selected">&#8377;{product.price}</option>
                </select>
              </div>

              {/* <input
                type="text"
                placeholder="Enter Olympiad Name"
                onChange={(e) => setOlympiad(e.target.value)}
                required
              /> */}
              
            </div>
           
          </div>

          <button
            style={{ marginBottom: "20px" }}
            className="add-to-cart-button"
            
            onClick={handleCreateNewOrder}
          >
            Register Now
          </button>
          <span style={{ color: "red" }}>
            Fill the same phone number and email id in the payment form as well
            for the verification if you're facing any issue contact us!
          </span>
          <button
            className="add-to-cart-button "
            onClick={routeChange}
        
          >
            Pay Now
          </button>
        </form>
      </section>
    </section>
  );
};

export default RelatedProducts;
