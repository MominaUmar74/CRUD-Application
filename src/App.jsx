import { addUser, updateUser, deleteUser } from "./features/user/userSlice.js";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [updateemail, setUpdateemail] = useState("");
  const [newname, setNewname] = useState("");
  const [newemail, setNewemail] = useState("");
  const [deletename, setDeletename] = useState("");

  const handleAdd = () => {
    dispatch(addUser({ name, email }));
  };

  const handleUpdate = () => {
    dispatch(updateUser({ oldEmail: updateemail, name: newname, email: newemail }));
  };

  const handleDelete = () => {
    dispatch(deleteUser({name: deletename}));
  };

  return (
    <>
      <div className="bg-green-500 text-white p-6 rounded-lg">
        <label>
          Enter name:
          <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Enter email:
          <input type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="momi">
        <label>
          Enter previous email:
          <input type="text" placeholder="Enter previous email" onChange={(e) => setUpdateemail(e.target.value)} />
        </label>
        <label>
          Enter new name:
          <input type="text" placeholder="Enter new name" onChange={(e) => setNewname(e.target.value)} />
        </label>
        <label>
          Enter new email:
          <input type="text" placeholder="Enter new email" onChange={(e) => setNewemail(e.target.value)} />
        </label>
        <button onClick={handleUpdate}>Update</button>
      </div>

      <div className="moni">
        <label>
          Enter name to delete:
          <input type="text" placeholder="Enter name" onChange={(e) => setDeletename(e.target.value)} />
        </label>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}

export default App;
