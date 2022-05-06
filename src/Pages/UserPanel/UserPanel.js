import {
  Input,
  Pagination,
  Select,
  Switch,
  Table,
  
  Modal,
  Button,
  
} from "antd";
//import ImageButton from "react-image-button";
//import { Action } from "history";
import React, {  useState } from "react";
//import { HiChatAlt, HiSearch } from "react-icons/hi";
//import { useDispatch, useSelector } from "react-redux";
import active from "../../Assets/Images/active.svg";
import action_1 from "../../Assets/Images/action_1.svg";
import action_2 from "../../Assets/Images/action_2.svg";
import "./UserPanel.scss";

const { Option } = Select;

function UserPanel(props) {


  //const [ordersData, setOrdersData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
 // const [search, setSearch] = useState("");
 // const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  
  
  const columns = [
    {
      title: "#",
      dataIndex: "user_count",
      key: "user_count",
      align: "center",
      sorter: {
        compare: (a, b) => a.user_count - b.user_count,
        
      },
     width:50,
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
      align: "center",
      
      
      sortDirections: [ 'ascend'],
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text, record) => (
        <span>
          {
            <img
              src={active}
              alt=""
              style={{ marginBottom: "3px", marginRight: "5px" }}
            />
          }
          {text}
        </span>
      ),
    },
    {
      title: "USER ON/OFF",
      dataIndex: "user_mode",
      key: "user_mode",
      align: "center",
      render: () => (
        <>
          <Switch className="trade-switch" />
        </>
      ),
    },
    {
      title: "LOGIN",
      dataIndex: "login",
      key: "login",
      align: "center",
      render: () => (
        <>
          <Switch></Switch>
        </>
      ),
    },
    {
      title: "CLIENT CODE",
      dataIndex: "client_code",
      key: "client_code",
      align: "center",
    },
    {
      title: "EXPIRE DATE",
      key: "expire_date",
      dataIndex: "expire_date",
      align: "center",
      sorter: (a, b) => new Date(a.expire_date) - new Date(b.expire_date)
      
         
    },
    {
      title: "P&L",
      key: "p_l",
      dataIndex: "p_l",
      align: "center",
      sortDirections: [ 'ascend','decend'],
      sorter: (a, b) => a.p_l.localeCompare(b.p_l),
      render: (text, record) => (
        <span className={`status ${text >= 0 ? "green-status" : "red-status"}`}>
          {text}
        </span>
      ),
    },
    {
      title: "TOTAL BUY",
      key: "total_buy",
      dataIndex: "total_buy",
      align: "center",
    },
    {
      title: "TOTAL SELL",
      key: "total_sell",
      dataIndex: "total_sell",
      align: "center",
    },
    {
      title: "PAYMENT STATUS",
      key: "payment_status",
      dataIndex: "payment_status",
      align: "center",
      render: (text, record) => (
        <Button
          className={`status ${text ==="Paid" ? "green-status" : "red-status"}`}
        >
          {text}
        </Button>
      ),
    },
    {
      title: "PLAN STATUS",
      key: "plan_status",
      dataIndex: "plan_status",
      align: "center",
      
      sorter: (a, b) => {
        if(a && a.plan_status && a.plan_status.length && b && b.plan_status && b.plan_status.length) {
            return a.plan_status.length - b.plan_status.length;
        } else if(a && a.plan_status && a.plan_status.length) {
            // That means be has null rechargeType, so a will come first.
            return -1;
        } else if(b && b.plan_status && b.plan_status.length) {
            // That means a has null rechargeType so b will come first.
            return 1;
        }
    
        // Both rechargeType has null value so there will be no order change.
        return 0;
    },
      render: (text, record) => (
        <span
          className={`status ${
            text === "Active" ? "green-status" : "red-status"
          }`}
        >
          {text}
        </span>
      ),
    },
    {
      title: "ACTION",
      key: "action",
      dataIndex: "action",
      align: "center",
      render: () => (
        <>
          <button className="action_button" >
            <img src={action_1} alt=""></img>{" "}
          </button>
          <button className="action_button" >
          
            <img  src={action_2} alt=""></img>
          </button>
        </>
      ),
    },
  ];

  
  const data = [
    {
      user_count:1,
      name: "John R will",
      client_code: "GO15073",
      expire_date: "1/07/2022",
      p_l: "+250000",
      total_buy: "0",
      total_sell: "0",
      payment_status: "UnPaid",
      plan_status: "InActive",
    },
    {
      user_count:2,
      name: "John R will",
      client_code: "GO15073",
      expire_date: "2/07/2022",
      p_l: "-250",
      total_buy: "0",
      total_sell: "0",
      payment_status: "UnPaid",
      plan_status: "InActive",
    },
    {
      user_count:3,
      name: "John R will",
      client_code: "GO15073",
      expire_date: "3/07/2022",
      p_l: "+2500",
      total_buy: "0",
      total_sell: "0",
      payment_status: "Paid",
      plan_status: "Active",
    },
    {
      user_count:4,
      name: "John R will",
      client_code: "GO15073",
      expire_date: "4/07/2022",
      p_l: "-25000",
      total_buy: "0",
      total_sell: "0",
      payment_status: "UnPaid",
      plan_status: "InActive",
    },
    {
      user_count:5,
      name: "John R will",
      client_code: "GO15073",
      expire_date: "31/07/2022",
      p_l: "-2500",
      total_buy: "0",
      total_sell: "0",
      payment_status: "Paid",
      plan_status: "Active",
    },
    {
      user_count:6,
      name: "John R will",
      client_code: "GO15073",
      expire_date: "31/07/2022",
      p_l: "+25",
      total_buy: "0",
      total_sell: "0",
      payment_status: "Paid",
      plan_status: "Active",
    },
   
    {  user_count:7,
      name: "Andre will",
      client_code: "GO15073",
      expire_date: "31/07/2022",
      p_l: "+25",
      total_buy: "0",
      total_sell: "0",
      payment_status: "UnPaid",
      plan_status: "InActive",
    },
  ];
 

  return (
    <>
      <div className="user-panel-main-wrap">
        <div className="table-top-panel-section">
          <div className="left-section">
            <span className="title"></span>
          </div>
          <div className="right-section">
            <div className="get-all-login">Get all login </div>
            <div className="Switch-button">
              <Switch />
            </div>
            <button className="add-new-users" onClick={showModal}>
              ADD NEW USERS
            </button>
          </div>
        </div>
        <div className="table-wrap">
          <Table pagination={false} columns={columns} dataSource={data} ellipsis={true}/>
          <div className="pagination-wrap">
            <Pagination
              pageSize={pageSize}
              current={page}
              showSizeChanger={false}
              onChange={(page) => setPage(page)}
              total={data?.length}
            />
            <span className="rows-per-page-title">Rows per page:</span>
            <Select
              className="page-select"
              value={pageSize}
              onChange={(value) => setPageSize(value)}
            >
              <Option value={10}>10</Option>
              <Option value={20}>20</Option>
              <Option value={50}>50</Option>
            </Select>
            <span className="page-range">
              {(page - 1) * pageSize + 1}-
              {(page - 1) * pageSize + pageSize > data?.length
                ? data?.length
                : (page - 1) * pageSize + pageSize}{" "}
              of {data?.length}
            </span>
          </div>
        </div>
       </div>
       <Modal
        title="ADD NEW USER"
        className="modal-add"
        visible={isModalVisible}
        okText="Save"
        cancelText="Close"
        onOk={handleOk}
        onCancel={handleCancel}
       >
        <div className="add-user-form">
          <p>Enter Name</p>
          <Input placeholder="Enter Name"/>
          <div className="box-2-3">
            <div className="client">
              <p>Client ID</p>
              <Input style={{ width: "302px" }} placeholder="Client ID"/>
            </div>
            <div className="password-add">
              <p style={{ width: "302px" }}>Password</p>
              <Input.Password placeholder="****"/> 
            </div>
          </div>
          <div className="box-2-3">
            <div className="client">
              <p>Two Factor Authentication</p>
              <Input style={{ width: "302px" }} placeholder="Security Answer"/>
            </div>
            <div className="password-add">
              <p style={{ width: "302px" }}>Dealer Name</p>
              <Input disabled></Input>
            </div>
          </div>
        </div>
       </Modal>
    </>
  );
}

export default UserPanel;
