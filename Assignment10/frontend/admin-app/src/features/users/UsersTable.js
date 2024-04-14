import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchUsers } from './UserSlice';

const UsersTable = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.type}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
