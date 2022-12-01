import { UserAuth } from '../context/AuthContext';


const Account = () => {
    const {  user } = UserAuth();

 
  
    return (
      
        <div>
          <h3 className='text-center'>Welcome, {user?.displayName}</h3>
        </div>
     
     
    );
  };
  
export default Account