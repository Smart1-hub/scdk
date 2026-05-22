export default function UsersManagement() {

  const users = [
    { name: "Admin User", role: "Admin" },
    { name: "Planner", role: "Editor" },
  ];

  return (
    <div className="p-10 text-white">

      <h1 className="text-4xl font-bold mb-8">Users</h1>

      {users.map((u, i) => (
        <div key={i} className="p-6 bg-slate-900 rounded-xl mb-4">
          <h2 className="text-xl font-bold">{u.name}</h2>
          <p className="text-cyan-400">{u.role}</p>
        </div>
      ))}

    </div>
  );
}