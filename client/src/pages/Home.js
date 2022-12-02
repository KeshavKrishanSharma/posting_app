import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import PostSection from "../components/PostSection";
import Spinner from "../components/Spinner";
import { db } from "../firebase";

const Home = ({user}) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "posts"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setPosts(list);
        setLoading(false)
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  if(loading){
    return<Spinner/>
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure wanted to delete that post ?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "posts", id));
        toast.success("post deleted successfully");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };



  
  return (
    <div className="container">
   
      <div className="row">
      
        <div className="col-12">
        <PostSection posts={posts} user={user} handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
};
export default Home;
