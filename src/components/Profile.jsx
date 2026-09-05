import { useSelector, useDispatch } from 'react-redux'
import { setUsers } from '../redux/slices/usersSlice'
import { useEffect } from 'react';

const Profile = () => {

    const users = useSelector((state) => state.users.users);

        const dispatch = useDispatch();

        useEffect(() => {
            const fetchUsers = async () => {
                const userApi = await fetch('https://jsonplaceholder.typicode.com/users');
                const userData = await userApi.json();

                dispatch(setUsers(userData));
            }

            fetchUsers();
        }, [dispatch]);



  return (
    <div>
      <h2 className="text">Користувачі</h2>

      {users.map((user) => (
        <div className="user" key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};


export default Profile;