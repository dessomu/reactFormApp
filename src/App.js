// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [userDetails, setUserDetails] = useState([]);

  let [userName,setUserName] = useState("");

  let [userEmail,setUserEmail] = useState("");

  let [userAge,setUserAge] = useState("");

  let [isModalOpen, setIsModalOpen] = useState(false);

  let [selectedUserId, setSelectedUserId] = useState("");

  let [updatedUserName,setUpdatedUserName] = useState("");

  let [updatedUserEmail,setUpdatedUserEmail] = useState("");

  let [updatedUserAge,setUpdatedUserAge] = useState("");

  function userDetailHandler(e){
    const id=Math.ceil(Math.random()*1000).toString();
    const storeUserObj={};
    storeUserObj.id=id;
    storeUserObj.name=userName;
    storeUserObj.email=userEmail;
    storeUserObj.age=userAge;
    // console.log(storeUserObj);

    
    // pushing the userObj to create an array of userObjects
    const updateUserArray=userDetails;
    updateUserArray.push(storeUserObj);

    // console.log(updateUserArray);
    // updating the userDetail array completed
    setUserDetails(updateUserArray);

    //making the input fields blank
    setUserName("");
    setUserEmail("");
    setUserAge("");
  }

  function deleteUserHandler(id){
    //filtering the userDetail array using "id"
    const updateUserDetails=userDetails.filter((userDetail)=>userDetail.id !== parseInt(id));
    setUserDetails(updateUserDetails);
  }


  function editUserHandler(){
    setSelectedUserId(userDetail.id);
    setUpdatedUserName(userDetail.name);
    setUpdatedUserEmail(userDetail.email);
    setUpdatedUserAge(userDetail.age);
    setIsModalOpen(true);  
  }

  function closeModal(){
    setIsModalOpen(false);
  }  

 function updateUserHandler(){
    const updatedUserDetails = userDetails.map((userDetail)=> {
        if( userDetail.id === selectedUserId ){
            return {
                ...userDetail,
                name : updatedUserName,
                email : updatedUserEmail,
                age : updatedUserAge
            }
        }else{
            return userDetail;
        };
    setUserDetails(updatedUserDetails);
    closeModal();
        
    })
  }  

  return (
    <>
      <div className="form">
        <label htmlFor="name">Enter Name</label>
        <input 
         value={userName}
         onChange={(e)=>{setUserName(e.target.value); 
        //  console.log(e.target.value);
        }}
         id="name"
         type="text" 
         placeholder="Enter Name"/>
        <label htmlFor="email">Enter Email</label>
        <input 
         value={userEmail}
         onChange={(e)=>{setUserEmail(e.target.value);
        //  console.log(e.target.value);
        }}
         id="email"
         type="email" 
         placeholder="Enter Email"/>
        <label htmlFor="age">Enter Age</label>
        <input 
         value={userAge}
         onChange={(e)=>{setUserAge(e.target.value);
        //  console.log(e.target.value);
        }}
         id="age"
         type="number" 
         placeholder="Enter Age"/>
        <button 
        className="add"
        onClick={userDetailHandler}>Add Guest</button>
      </div>
      <div className="guest-container">
        {
        userDetails.map(userDetail=>{
          return (
           <div  key={userDetail.id} className="guest">
              <p>Name: <span>{userDetail.name}</span></p>
              <p>Email: <span>{userDetail.email}</span></p>
              <p>Age: <span>{userDetail.age}</span></p>
              <button onClick={()=>editUserHandler(userDetail)}  className="edit">Edit</button>
              <button onClick={()=>deleteUserHandler(userDetail.id)} className="delete">Delete</button>
              {/* <h1 style={{color:"white"}}>{userDetail.id}</h1> */}
           </div>
         
            
          );
        })
        }
       
      </div>
      {isModalOpen ?   <div  className="modal">
                  <div  className="inner-modal">
                      <label  htmlFor="edit-name">Edit Name</label>
                      <input value={updatedUserName} onChange={(e)=>setUpdatedUserName(e.target.value)} id="edit-name" type="text" placeholder="Edit Name"/>
                      <label htmlFor="edit-email">Edit Email</label>
                      <input value={updatedUserEmail}  onChange={(e)=>setUpdatedUserEmail(e.target.value)} id="edit-email" type="text" placeholder="Edit Email"/>
                      <label htmlFor="edit-age">Edit Age</label>
                      <input value={updatedUserAge}  onChange={(e)=>setUpdatedUserAge(e.target.value)} id="edit-age" type="text" placeholder="Edit Age"/>
                      <button onClick={closeModal} className="cancel">Cancel</button>
                      <button onClick={updateUserHandler} className="update">Update</button>
                  </div>
           </div> : null}    
      
    
    </>
  );

}

export default App;
