import useUserDetails from '../Hooks/getUser';


const User = () => {
    const {user,error} = useUserDetails();

    if (error) {
        return <span>{error}</span>;
    }

    return (
      <div className="person">
      {user ? <>  
                <h3>{user.name}</h3>
                <span>{user.email}</span>
              </> : 
              <span>Loading...</span>}
      </div>
    );
}

export default User;