import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import EmpUpdateForm from "./components/EmpUpdateForm";

import EmpAddForm from "./components/EmpAddForm";
import EmpTable from "./components/EmpTable";
import axios from "axios";

const BACKEND_URL = `http://localhost:${8081}/emprest`;
axios.defaults.baseURL = BACKEND_URL;



function App() {
  const [empList, setEmpList] = useState([]);
  const [statusMessages, setStatusMessages] = useState([]);
  const fetchEmpList = async () => {
   
    const resp = await axios.get("/emps");
    if(resp.status !== 200){
      setStatusMessages((prev) => [...prev, "Error fetching employee list!"]);
      return;
    }
    const data = resp.data;
    const empList = data.map((emp) => {
      return { id: emp.empId, name: emp.empName, salary: emp.empSal };
    });
    setEmpList(empList);
    setStatusMessages((prev) => [...prev, "Employee list fetched successfully!"]);
  };

  useEffect(() => {
    fetchEmpList();
  
  }, []);


  useEffect(() => {
    console.log(statusMessages);
    const timeout = setTimeout(() => {
      setStatusMessages((prev) => {
        if (prev.length > 0) {
          return prev.slice(1);
        } else {
          return prev;
        }
      });
    }, 3000);
    return () => clearTimeout(timeout);
  } , [statusMessages]);

  const updateEmpDetails = async (id, name, salary) => {
    const response = await axios.put(`/emp`, {
      empId: id,
      empName: name,
      empSal: salary,
    });

    if(response.status !== 200){
      setStatusMessages((prev) => [...prev, "Error updating employee!"]);
      return;
    }
    const data = response.data;
    if (data != null) {
      setStatusMessages((prev) => [...prev, "Employee updated successfully!"]);
      fetchEmpList();
    }
  };

  const addEmp = async (name, salary) => {
    const response = await axios.post(`/emp`, {
      empId: empList.length + 1,
      empName: name,
      empSal: salary,
    });
    if(response.status !== 200){
      setStatusMessages((prev) => [...prev, "Error adding employee!"]);
      return;
    }
    const data = response.data;
    if (data != null) {
      setStatusMessages((prev) => [...prev, "Employee added successfully!"]);
      fetchEmpList();
    }
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`/emp/${id}`);
    if(response.status !== 200){
      setStatusMessages((prev) => [...prev, "Error deleting employee!"]);
      return;
    }
    const data = response.data;
    if (data != null) {
      setStatusMessages((prev) => [...prev, "Employee deleted successfully!"]);
      fetchEmpList();
    }
  }

  return (
    <div className="main">
      {/* <FollowCursor offset={13} /> */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "20px",
        }}
      >
      {
        statusMessages.length ?  <div className="status-message-container">
          {statusMessages.map((message, index) => {
            return (
              <p key={index} className="status-message">
                {message}
              </p>
            );
          })}
        </div>:null
      }


        <EmpUpdateForm updateEmpDetails={updateEmpDetails} />
        <EmpAddForm addEmp={addEmp} />
      </div>
        <EmpTable handleDelete={handleDelete} empList={empList} />
    </div>
  );
}

export default App;
