import React, { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";
import styled from "styled-components";
import { UserAuth } from "../context/AuthContext";
import AOS from 'aos'


const Wrapper = styled.main`
  .box {
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    padding: 1rem;
    margin-bottom: 3.5rem;
    border-radius: 3rem;
    margin: 1rem;
  }
  .posts_heading {
    font-size: 24px;
    color: #222;
    margin: 1.5rem;
  }

  .posts_img {
    height: 200px;
    @include border-radius(5px);
    overflow: hidden;
    position: relative;
    top: 0;
    @include box-shadow(0, 2px, 3px, 1px, rgba(0, 0, 0, 0));
    @include transition(all 0.5s);
  }

  .posts_img > img {
    height: 260px;
    
    overflow: hidden;
  }
  .imgimg{
    width: 18rem;
    overflow: hidden;
    padding: 5px;
    border-radius: 30px;
  }

  .hover_posts_img:hover > .posts-img {
    top: -7px;
    @include box-shadow(0, 2px, 3px, 1px, rgba(0, 0, 0, 0.3));
  }

  .title {
    font-size: 17px;
    color: #222 !important;
    font-weight: 800;
    font-family: "Poppins";
    text-decoration: none;
    display: block;
  }

  .category {
    display: inline-block;
    position: relative;
    background-color: #4287f5;
    padding: 4px 8px;
    color: #fff;
    text-decoration: none;
    font-size: 13px;
    text-transform: none;
    line-height: 16px;
    font-weight: 700;
    border-radius: 4px;
  }

  .fa-trash {
    color: #c43421 !important;
  }

  .fa-edit {
    color: lightsalmon !important;
  }

  .meta_info {
    font-size: 15px;
    color: #222;
    display: block;
    font-family: "Poppins";
    text-decoration: none;
  }

  .post-single-content .meta-info {
    margin-top: 8px;
    border-bottom: 1px solid #777;
    margin-bottom: 15px;
  }

  .author {
    display: inline-block;
    font-weight: 600;
    font-size: 15px !important;
  }

  .short_desc {
    font-size: 14px;
    color: #777;
  }

  .btn_read {
    background: #544e66 !important;
    @include border-radius(0!important);
    color: #fff !important;
    padding: 5px 10px !important;
    float: left;
    margin-top: 10px;
    font-size: 14px;
  }
`;

const PostSection = ({ posts, handleDelete }) => {
  const { user } = UserAuth();
  useEffect(() => {
    AOS.init({duration:2000})
  }, []);
  return (
    <Wrapper>
      <main>
        <h4
          data-aos="fade-down-right"
          className="posts_heading text-start py-2 mb-4"
        >
          All Posts
        </h4>

        {posts?.map((item) => (
          <div data-aos="zoom-in-up" className="row box pb-4" key={item.id}>
            <div className="col-lg-4">
              <div className="hover_posts_img">
                <div className="posts_img text-center">
                  <img className="imgimg" src={item.imgUrl} alt={item.title} />
                  <div></div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 ">
              <div className="text-start">
                <h6 className="category">{item.category}</h6>
                <span className=" title py-2"> {item.title} </span>
                <span className="meta_info">
                  <p className="author"> {item.author} </p>
                  {item.timestamp.toDate().toDateString()}
                </span>
              </div>
              <div className="short_desc">{excerpt(item.description, 200)}</div>
              <Link to={`/details/${item.id}`}>
                <button className="btn btn-read">Read More...</button>
              </Link>

              {user?.uid && item.userId === user.uid && (
                <div style={{ float: "right" }}>
                  <FaTrash
                    className="fa-trash"
                    name="trash"
                    style={{
                      margin: "15px",
                      cursor: "pointer",
                      height: "1.5rem",
                    }}
                    onClick={() => handleDelete(item.id)}
                  ></FaTrash>
                  <Link to={`/update/${item.id}`}>
                    <GrEdit
                      className="fa-edit"
                      name="trash"
                      style={{
                        margin: "15px",
                        cursor: "pointer",
                        height: "1.5rem",
                      }}
                    ></GrEdit>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </main>
    </Wrapper>
  );
};
export default PostSection;
