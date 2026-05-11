import { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import EditModal from "./components/EditModal";

export default function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("/_/backend/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this user?")) return;
    await axios.delete(`/_/backend/api/users/${id}`);
    fetchUsers();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Users Manager
        </h1>

        <UserForm onUserAdded={fetchUsers} />

        {loading ? (
          <p className="text-center text-gray-400 py-10">Loading users...</p>
        ) : (
          <UserList
            users={users}
            onEdit={setEditUser}
            onDelete={handleDelete}
          />
        )}

        <EditModal
          user={editUser}
          onClose={() => setEditUser(null)}
          onUpdated={fetchUsers}
        />
      </div>
    </div>
  );
}
