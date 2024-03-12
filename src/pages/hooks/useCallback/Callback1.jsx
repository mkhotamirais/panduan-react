import { useCallback, useEffect, useState } from "react";

const Callback1 = () => {
  const fetchUsers = useCallback(() => ["ahmad", "abdul", "siti"], []);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = fetchUsers();
    setUsers(data);
  }, [fetchUsers]);

  return (
    <div className="border rounded p-2">
      <ul>
        {users.map((u) => (
          <li key={u}>{u}</li>
        ))}
      </ul>
    </div>
  );
};

export default Callback1;
