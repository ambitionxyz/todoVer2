import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRequest } from "../list/toDoList.action";
import { patchRequest } from "../list/toDoList.action";
const Job = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isName, setIsName] = useState();
  const [isDes, setIsDes] = useState();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  console.log(props);

  const onDelete = () => {
    const { userId, _id, ...other } = props.data;
    dispatch(
      deleteRequest({
        token,
        userId,
        _id,
      })
    );
  };
  const onEdit = () => {
    setIsEdit((pre) => !pre);
  };
  const nameOnchange = (e) => {
    setIsName(e.target.value);
  };
  const desOnchange = (e) => {
    setIsDes(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const dataInput = {
      name: isName,
      description: isDes,
    };
    console.log(dataInput);
    dispatch(
      patchRequest({
        token: token,
        ...props.data,
        name: dataInput.name,
        description: dataInput.description,
      })
    );
  };
  return (
    <li>
      <div>
        <p>{props.data.name}</p>
      </div>
      <div>
        <button onClick={onEdit}>edit</button>
        {isEdit && (
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={`${props.data.name}`}
              onChange={nameOnchange}
            ></input>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              onChange={desOnchange}
              placeholder={`${props.data?.description}`}
            ></input>
            <br></br>
            <button>Submit</button>
          </form>
        )}
        {!isEdit && <button onClick={onDelete}>delete</button>}
      </div>
    </li>
  );
};
export default Job;
