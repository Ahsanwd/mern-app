export default function UserList({ users, onEdit, onDelete }) {
  if (users.length === 0) {
    return (
      <p className="text-center text-gray-400 py-10">No users found.</p>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-gray-500 text-sm uppercase">
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Age</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {users.map((user) => (
            <tr key={user._id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 font-medium text-gray-800">{user.name}</td>
              <td className="px-6 py-4 text-gray-500">{user.email}</td>
              <td className="px-6 py-4 text-gray-500">{user.age}</td>
              <td className="px-6 py-4 text-center space-x-2">
                <button
                  onClick={() => onEdit(user)}
                  className="bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1 rounded-lg text-sm transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user._id)}
                  className="bg-red-100 text-red-600 hover:bg-red-200 px-3 py-1 rounded-lg text-sm transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
