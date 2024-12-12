import { NavLink, Route, Routes } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="header">
        <h2>Inventory Management System</h2>
        <div className="links">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
              fontWeight: "bold",
            })}
            to={"/productList"}
          >
            Products
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
              fontWeight: "bold",
            })}
            to={"/supplierList"}
          >
            Suppliers
          </NavLink>
        </div>
      </div>

      <div className="bg">
        <img
          src="https://img.freepik.com/premium-vector/inventory-control-system-concept-professional-manager-checking-goods-stock-supply-inventory-management-with-goods-demand_185038-803.jpg?semt=ais_hybrid"
          alt="sad"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
            overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
}
