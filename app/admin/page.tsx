'use client';
import { useEffect, useState } from "react";
import UserTable from "../components/ui/admin/UserTable";


export default function Admin() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/users');
        if (!res.ok) {
          throw new Error('Failed to fetch users from database.');
        }

        const data = await res.json();
        setUsers(data);
        setLoading(false);

      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();

  }, []);

  if (loading) return <p>Loading... Please wait!</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <main>
      <h3>Admin Page</h3>

      <section>
        <UserTable users={users} />
      </section>
    </main>
  );
}
