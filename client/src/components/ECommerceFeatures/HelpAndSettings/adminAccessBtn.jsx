import { useNavigate } from "react-router-dom";
import { useAdmin } from "../common/Context/AdminContext";

const AdminButton = () => {
  const admin = useAdmin();
  const navigate = useNavigate();

  return (
    <>
      {admin ? (
        <div className="flex flex-col md:items-end px-5 md:px-1 mt-10">
          <button
            onClick={() => navigate("/adminaccess")}
            className="font-medium bg-green-500 rounded-md p-2 text-sm text-white hover:bg-green-600"
          >
            Admin Access
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminButton;
