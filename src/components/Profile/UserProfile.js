import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";

import { useSelector } from "react-redux";
const UserProfile = () => {
  const profile = useSelector((state) => state.user.user);
  const isLogin = useSelector((state) => state.user.isLogin);
  console.log("===================>profile", profile);
  console.log("islogin", isLogin);
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <h1>{`token ID: ${profile?.data?.token}`}</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
