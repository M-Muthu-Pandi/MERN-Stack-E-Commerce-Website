import { useNavigate } from "react-router-dom";

const AdminButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:items-end px-5 md:px-1 mt-10">
      <button
        onClick={() => navigate("/adminaccess")}
        className="font-medium bg-green-500 rounded-md p-2 text-sm text-white hover:bg-green-600"
      >
        Admin Access
      </button>
    </div>
  );
};

export default AdminButton;
