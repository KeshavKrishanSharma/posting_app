import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import styled from "styled-components";

const Wrapper = styled.main`
.post-title{
    background-color: antiquewhite;
    width: 300px;
    opacity: 0.7;
    border-top-right-radius: 45px;
    border-bottom-right-radius:45px;
}
.meta-info{
    font-size: 1rem;
}

`;

const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

 
  const getPostDetails = async () => {
    const docRef = doc(db, "posts", id);
    const postDetails = await getDoc(docRef);
    setPost(postDetails.data());
  };
  useEffect(() => {
    id && getPostDetails();
  }, [id]);

  return (
    <Wrapper>
      <main>
        <div className="single">
          <div
            className="post-title-box "
            style={{ backgroundImage: `url( '${post?.imgUrl}' )` , height:"20rem",width:"83%", margin:"auto"}}
          >
            <div className="overlay"></div>
            <div className="post-title">
              <span> {post?.timestamp.toDate().toDateString()} </span>
              <h2> {post?.title} </h2>
            </div>
          </div>
          <div className="container-fluid py-4 paddind post-single-content">
            <div className="container padding">
                <div className="row mx-0">
                    <div className="col-md-8">
                        <span className="meta-info text-start">
                        <b>   By <p className="author"> {post?.author} </p></b> 
                           
                        </span>
                        <p className="text-start"> {post?.description} </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default Details;
