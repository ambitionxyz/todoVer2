import { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequest } from "./toDoList.action";
import { patchRequest } from "./toDoList.action";
import Job from "../job/Job";

import classes from "./List.module.css";
const List = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [isInput, setIsInput] = useState();
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.user.user.data.token);
  const token = localStorage.getItem("token");
  const USE_ID = "62e0e59ef933c8c8546f62d5";
  // console.log(token);
  const isLogin = useSelector((state) => state.user.isLogin);
  const isAddSuccess = useSelector((state) => state.list.isAddSuccess);
  useEffect(() => {
    dispatch(fetchRequest(token));
  }, [isLogin, isAddSuccess]);

  const dataSource = useSelector((state) => state.list.list);
  console.log(dataSource);

  const onChangeI = (e) => {
    setIsInput(e.target.value);
  };
  const onSubmitI = (e) => {
    e.preventDefault();
    console.log(token, e.target.value);

    dispatch(
      patchRequest({
        token: token,
        name: isInput,
        description: "hello luan ne",
        isDone: true,
      })
    );
    // dispatch(fetchRequest(token));
  };
  return (
    <Fragment>
      {isLogin && (
        <div>
          <button
            onClick={() => {
              setIsAdd((preS) => !preS);
            }}
          >
            Them
          </button>
          {isAdd && (
            <form onSubmit={onSubmitI}>
              <input type="text" onChange={onChangeI}></input>
              <button>Submit</button>
            </form>
          )}
        </div>
      )}
      {isLogin && (
        <ul>
          {dataSource.map((val, ind) => {
            if (val.userId === USE_ID) {
              return <Job key={ind} data={val} />;
            }
          })}
        </ul>
      )}
    </Fragment>
  );
};

export default List;
