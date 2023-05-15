import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import {addTask} from "../app/taskSlice"
function Addtask() {
  const [description, setDescription] = useState("");
  // const[isDone,setIsDone] = useState(false)
  const Dispatch = useDispatch()
  const handelSubmit = () => {
    Dispatch(addTask({
        description : description,
        isDone:false
    }));
  }
  return (
    <div className="input">
      <Input
        placeholder="Search..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={()=> handelSubmit()}>Add</Button>
    </div>
  );
}

export default Addtask;
