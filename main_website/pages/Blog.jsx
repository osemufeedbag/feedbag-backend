import React from "react";
import searchLogo from "../assets/images/search-normal.svg";
import featuredImage from "../assets/images/FBH-12.jpg";
import { recentPosts } from "../BlogData/recentPosts";
import PostDisplay from "../components/PostDisplay";
import CafCommunityCard from "../components/CafCommunityCard";
import { topPosts } from "../BlogData/topPosts";
import { GoDotFill } from "react-icons/go";

const Blog = () => {
  return (
    <div className="pt-[10vh] md:pt-[15vh]  font-poppins text-[#131313]">
      <section className="flex flex-col text-[#131313] bg-white p-5 md:px-20 md:py-10 gap-4 md:gap-14 ">
        <section className="flex ">
          <div className="md:w-2/5 w-full bg-[#EBFFEE] flex items-center p-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl">
            <input
              type="text"
              placeholder="search"
              className="w-full bg-transparent lg:text-xl text-base font-normal placeholder:text-[#131313]"
            />
            <div>
              <img src={searchLogo} className="w-4 md:w-5" />
            </div>
          </div>
        </section>

        <section className="flex flex-col-reverse items-stretch lg:flex-row gap-7 lg:gap-0 ">
          <div className="bg-[#EBFFEE] flex flex-col gap-3 lg:w-2/5 rounded-2xl p-5 md:py-[30px] md:px-10">
            <h2 className="font-medium md:text-3xl text-xl">Top Posts</h2>
            <div className="flex flex-col gap-2">
              {topPosts.map((post, index) => {
                return (
                  <div className="flex flex-col gap-2 md:gap-5" key={index}>
                    <h2 className="md:text-xl ">{post.title}</h2>
                    <div className="text-[#B0B0B0] text-xs md:text-sm flex gap-1 items-center">
                      <span>{post.category}</span>
                      <GoDotFill />
                      <span>{post.createdAt}</span>
                    </div>
                    {index !== topPosts.length - 1 && (
                      <hr className="border-[1px] border-[#D0D0D0]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-3/5 lg:pl-7  md:rounded-2xl overflow-hidden relative font-normal">
            <img
              src={featuredImage}
              alt=""
              className="w-full h-[50vh] md:h-full rounded-2xl object-cover"
            />
            <div className="absolute left-0 bottom-0 text-white flex flex-col gap-3 p-5 md:px-20 md:py-14">
              <div>
                <span className="text-sm">Featured</span>
                <h2 className="text-lg lg:text-xl font-medium">
                  Blockchain Explained: Unveiling the Transparency Behind Your
                  Food on Feedbag Agrihub
                </h2>
              </div>

              <p>
                Ever wondered exactly where your food comes from? Blockchain
                technology is revolutionizing the food supply chain, and Feedbag
                Agrihub is at the forefront....
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="px-5 md:px-20 bg-[#F1F1F1F1] py-14 flex flex-col gap-10">
        <h2 className="md:font-medium lg:text-3xl md:text-2xl text-xl  ">
          Recent Post
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          {recentPosts.map(({ title, img, content, category, createdAt }) => {
            return (
              <PostDisplay
                title={title}
                img={img}
                category={category}
                content={content}
                date={createdAt}
              />
            );
          })}
        </div>
      </section>
      <section className="bg-white p-5 md:px-20 md:py-10">
        <CafCommunityCard />
      </section>
    </div>
  );
};

export default Blog;
