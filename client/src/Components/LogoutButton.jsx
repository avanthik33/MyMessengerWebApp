import useLogOut from "../Hooks/useLogOut";
import { CiLogout } from "react-icons/ci";


const LogoutButton = () => {
  const { loading, logOut } = useLogOut();

  return (
    <div className="mt-auto">
      {!loading ? (
        <CiLogout
          className="w-6 h-6 text-blue cursor-pointer"
          onClick={logOut}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
