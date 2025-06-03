import React, { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

import sidePost1 from './../assets/side-post-1.jpg'
import sidePost2 from './../assets/side-post-2.jpg'
import sidePost3 from './../assets/side-post-3.jpg'
import sidePost4 from './../assets/side-post-4.jpg'
import sidePost5 from './../assets/side-post-5.jpg'
import sidePost6 from './../assets/side-post-6.png'
import sidePost7 from './../assets/side-post-7.png'
import sidePost8 from './../assets/side-post-8.jpg'
import sidePost9 from './../assets/side-post-9.jpg'
import sidePost10 from './../assets/side-post-10.jpg'
import editorPack1 from './../assets/editor-pack-1.jpg'
import editorPack2 from './../assets/editor-pack-2.jpg'
import editorPack3 from './../assets/editor-pack-3.jpg'
import heroPost4 from './../assets/hero-post-4.png'
import postAuthor from './../assets/post-author.png'
import post1 from './../assets/post-1.jpg'
import post2 from './../assets/post-1.jpg'
import cat1 from './../assets/categori-img-1.jpg'
import cat2 from './../assets/categori-img-2.jpg'
import cat3 from './../assets/categori-img-3.jpg'
import cat4 from './../assets/categori-img-4.jpg'
import blog1 from './../assets/blog-1.jpg'
import blog2 from './../assets/blog-2.jpg'
import blog3 from './../assets/blog-3.jpg'
import blog4 from './../assets/blog-4.jpg'
import blog5 from './../assets/blog-5.jpg'
import blogBg from './../assets/blog-bg.png'
import subsImg from './../assets/subscribe-img.png'

import banner from './../assets/banner.png'

import Datas from './../Data.json'

const Index = () => {

  const [activeTab,setActiveTab] = useState('trending');
  const trendingPosts = [
    {img:sidePost1, category: 'Business', text:'Navigation System as anything does not space?'},
    {img:sidePost2, category: 'Tech', text:'Navigation System as anything does not space?'},
    {img:sidePost3, category: 'Tech', text:'Navigation System as anything does not space?'},
    {img:sidePost4, category: 'Business', text:'Navigation System as anything does not space?'},
    {img:sidePost5, category: 'Food', text:'Navigation System as anything does not space?'},
  ];

  const latestposts = [
    {img:sidePost6, category: 'Business', text:'Navigation System as anything does not space?'},
    {img:sidePost7, category: 'Tech', text:'Navigation System as anything does not space?'},
    {img:sidePost8, category: 'Tech', text:'Navigation System as anything does not space?'},
    {img:sidePost9, category: 'Business', text:'Navigation System as anything does not space?'},
    {img:sidePost10, category: 'Food', text:'Navigation System as anything does not space?'},
  ];
  const postToDisplay = activeTab ==='trending' ? trendingPosts :latestposts;

  const categories = [
    {title:"Business", Post:3, image:cat1},   
    {title:"Travel", Post:8, image:cat2},   
    {title:"Lifestyle", Post:5, image:cat3},   
    {title:"Tech", Post:3, image:cat4},   
  ]
  return (
    <>
      <div className="container mt-3">
        <div className="gap-4 d-flex align-items-center">
          <div className="headline-title">
            <i className="bi bi-lightning">Top News</i>
          </div>
          {/* swiper */}
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            direction={"vertical"}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="headline-text-swiper"
          >
            {Datas.map((data, index) => {
              return (
              <SwiperSlide key={index}>
                <div className="headline d-flex align-items-center gap-2">
                    <p className="m-0">
                        {data.title}
                    </p>
                </div>
              </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        {/* headline post */}
        <div className="row mt-5">
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            direction={'horizontal'}
            modules={[Autoplay]}
            autoplay={{
                delay:2000,
                disableOnInteraction: false,
            }}
            breakpoints={{
              1399:{slidesPerView:3},
              991:{slidesPerView:2},
              767:{slidesPerView:1},
              0:{slidesPerView:1},
            }}
            className="headline-post-swiper"
            >
                {Datas.map((data,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="headline-card d-flex align-items-center gap-2">
                                <div className="headline-image">
                                    <img src={data.Image} className="img-fluid" alt="" />
                                </div>
                                <div className="headline-det">
                                    <span className="">{data.tag}</span>
                                    <p className="">{data.paragraph}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

        <div className="row mt-5">
          <div className="col-lg-3">
            {Datas.slice(2,4).map((data,index)=>{
              return(
                <div className="post-card" key={index}>
                  <div className="post-img">
                    <img src={data.Image} className='img-fluid rounded' alt="" />
                  </div>
                  <div className="post-content mt-3">
                    <span className="post-span post-span1">{data.tag}</span>
                    <h2>{data.title}</h2>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="col-lg-6 blog-swiper">
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className='rounded'
            >
              {Datas.map((data,index)=>(
                <SwiperSlide key={data.id}>
                  <div className={`post-wrap-card post-wrap-card${index+1}`} style={{background:`url(${data.Image})` , backgroundSize: 'cover' , backgroundPosition:'center' }}>
                    <div className="post-wrap-content w-100 p-5">
                      <span className="post-span3">{data.tag}</span>
                      <h2>{data.title}</h2>
                      <p>{data.paragraph}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-lg-3">
            <div className="post-box-wrap">
              <div className="post-box-tab d-flex gap-3">
                <button className={`btn ${activeTab === 'trending' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={()=>setActiveTab('trending')}
                >
                  Trending News
                </button>
                <button className={`btn ${activeTab === 'latest' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={()=>setActiveTab('latest')}
                >
                  Latest News
                </button>
              </div>
              <div className="mt-4 shadow px-3 py-2 rounded">
                {postToDisplay.map((post,index)=>(
                  <div className={`post-box d-flex align-items-center gap-2 border-bottom pb-2 ${index===0 ? 'mt-3' : 'mt-3'}`}
                  key={index}
                  >
                    <div className="post-box-img">
                      <img src={post.img} className="img-fluid" alt="" />
                    </div>
                    <div className="post-box-content">
                      <span>{post.category}</span>
                      <p>{post.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* banner */}
      <div className="banner-img py-5 my-5">
        <div className="container">
          <div className="col-lg-12 top-banner-img">
            <img src={banner} className="img-fluid rounded-4" alt="" />
          </div>
        </div>
      </div>

      {/* editor pick */}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="mb-4 editor-tittle">Editor's Pick</h4>
            <div className="col-lg-8">
              <div className="position-relative mb-3">
                <img src={editorPack2} className='img-fluid rounded w-100' alt="" />
                <div className="sport-card position-absolute bg-white p-3 shadow">
                  <span className="tag food post-span post-span4 post-tag">SPORTS</span>
                    <h5 className="mt-2">Credit Shouldn't Affect Health Insurance, Experts Say</h5>
                    <p className="text-muted small mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero possimus ullam nihil, dolores tenetur animi at veniam adipisci esse!</p>
                       <p className="small text-muted mt-2">by <strong>Ricky</strong> &nbsp; - &nbsp; January 29, 2025</p>
                </div>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-4 post-wrap">
                <img src={editorPack1} alt="" className="img-fluid rounded mb-2" />
                <span className="post-span post-span1 post-tag">FOOD</span>
                <p className="mb-0 fw-bold mt-2">19 Cold Soup Recipies for Hot Summer Days</p>
                <small>By Ricky - January 29, 2024</small>
              </div>

              <div className="col-md-4 post-wrap">
                <img src={editorPack3} alt="" className="img-fluid rounded mb-2" />
                <span className="post-span post-span2 post-tag">Tech</span>
                <p className="mb-0 fw-bold mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <small>By Ricky - January 29, 2024</small>
              </div>

              <div className="col-md-4 post-wrap">
                <img src={heroPost4} alt="" className="img-fluid rounded mb-2" />
                <span className="post-span post-span3 post-tag">LIFESTYLE</span>
                <p className="mb-0 fw-bold mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <small>By Ricky - January 29, 2024</small>
              </div>

            </div>
          </div>
          <div className="col-lg-4 follow">
            <h4 className="mb-3">Follow Us</h4>
            <div className="row">
              <div className="col-6 mb-2">
                <div className="social-box facebook d-flex align-items-center gap-3 mb-3">
                  <i className="ri-facebook-box-line"></i>
                  <div>
                    <h5 className="mb-0">Facebook</h5>
                    <small>23k Likes</small>
                  </div>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="social-box youtube d-flex align-items-center gap-3 mb-3">
                  <i className="ri-youtube-line"></i>
                  <div>
                    <h5 className="mb-0">YouTube</h5>
                    <small>50k Likes</small>
                  </div>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="social-box instagram d-flex align-items-center gap-3 mb-3">
                  <i className="ri-instagram-line"></i>
                  <div>
                    <h5 className="mb-0">Instagram</h5>
                    <small>4.5M Likes</small>
                  </div>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="social-box twiter d-flex align-items-center gap-3 mb-3">
                  <i className="ri-twitter-fill"></i>
                  <div>
                    <h5 className="mb-0">Twitter</h5>
                    <small>59k Likes</small>
                  </div>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="social-box spotify d-flex align-items-center gap-3 mb-3">
                  <i className="ri-spotify-line"></i>
                  <div>
                    <h5 className="mb-0">Spotify</h5>
                    <small>17k Likes</small>
                  </div>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="social-box pinterest d-flex align-items-center gap-3 mb-3">
                  <i className="ri-pinterest-line"></i>
                  <div>
                    <h5 className="mb-0">Pinterest</h5>
                    <small>56k Likes</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="author-card mt-4 text-center border rounded shadow p-5 mt-5">
              <img src={postAuthor} alt="" className="img-fluid" />
              <h6 className="mt-2">Hello, I'm Carmela</h6>
              <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Cumque, consectetur. Nesciunt, voluptas eius.</p>
                 <button className="btn btn-primary btn-sm">About Me</button>
            </div>
          </div>
        </div>
      </div>

      {/* most read post */}
      <div className="container my-5">
        <div className="row">
          <div className="head-wrap my-3 d-flex justify-content-between align-content-center">
            <h1>Most Read</h1>
            <button className="btn">Read More</button>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="mr-card-wrap position-relative">
              <div className="mr-content position-absolute">
                <span className="post-span post-span2">Travel</span>
                <h3 className="title">Extraordinary Snoqualmie falls and sattle Tour</h3>
                <p className="small mt-2">By <strong>Ricky</strong>&nbsp; &nbsp; January 09, 2019&nbsp;</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="post-card">
              <div className="post-img mr-card-img">
                <img src={post1} alt="" className="img fluid rounded" />
              </div>
              <div className="post-content mt-3">
                <span className="post-span post-span1">Food</span>
                <h2>Who Owns Your Body: 10 Steps to the Best Shape</h2>
              </div>
            </div>

            <div className="post-card">
              <div className="post-img mr-card-img">
                <img src={post2} alt="" className="img fluid rounded" />
              </div>
              <div className="post-content mt-3">
                <span className="post-span post-span3">Travel</span>
                <h2>The Best Therapy for Your Mind And Soul done</h2>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="post-box-wrap">
              <div className="post-box-tab d-flex gap-3">
                <button className={`btn ${activeTab === 'trending' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={()=>setActiveTab('trending')}
                >
                  Trending News
                </button>
                <button className={`btn ${activeTab === 'latest' ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={()=>setActiveTab('latest')}
                >
                  Latest News
                </button>
              </div>
              <div className="mt-4 shadow px-3 py-2 rounded">
                {postToDisplay.map((post,index)=>(
                  <div className={`post-box d-flex align-items-center gap-2 border-bottom pb-2 ${index===0 ? 'mt-3' : 'mt-3'}`}
                  key={index}
                  >
                    <div className="post-box-img">
                      <img src={post.img} className="img-fluid" alt="" />
                    </div>
                    <div className="post-box-content">
                      <span>{post.category}</span>
                      <p>{post.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* category */}
      <div className="container categories py-5">
        <div className="row g-4">
          {categories.map((ct,i)=>(
            <div className="col-12 col-md-6 col-lg-3" key={i}>
              <div className="card text-white border-0 position-relative overflow-hidden"
              style={{
                borderRadius:'16px',
                height:'100%',
              }}
              >
                <img src={ct.image} alt="" 
                className="card-img" 
                style={{
                  height:'100%',
                  objectFit:'cover',
                  borderRadius:'16px'
                }}
                />
                <div className="d-flex card-img-overlay flex-column justify-content-end text-center bg-dark bg-opacity-50 rounded">
                  <p className="mb-1 fs-5">{ct.Post} Posts</p>
                  <h5 className="card-title fw-bold">{ct.title}</h5>
                  <button className='btn btn-outline-info btn-sm w-auto mx-auto mt-2 rounded-pill px-4'>See All post</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* latest posts */}
      <div className="container my-5">
        <div className="row">
          <div className="head-wrap my-3 d-flex justify-content-between align-items-center">
            <h2>Latest Posts</h2>
          </div>
        </div><div className="row">
          <div className="col-lg-8">
            {Datas.map((data, index)=>(
              <div className="card lp-card border rounded p-3 my-3 d-flex flex-row align-items-start gap-3" key={data.id}>
                <img src={data.Image} alt={data.title} className="rounded img-fluid lp-post"
                style={{
                  width:'280px',
                  height:'200px',
                  objectFit:'cover'
                }}
                />
                <div className="flex-grow-1">
                  <span className={`post-span ${data.tag==='Lifestyle' ?
                  'post-span' : data.tag==='Tech' ?
                  'post-span2' : data.tag==='Business'?
                  'post-span3' : "Lifestyle"?
                  'post-span4' : ""
                  } px-3 py-1 text-uppercase`}>{data.tag}</span>
                  <h5 className="fw-bold fs-4 my-3"> {data.title}</h5>
                  <p className="mb-2 text-muted">{data.author_date} - <i className="bi bi-chart"></i>0</p>
                  <button className="btn btn-light mt-3 rounded-circle border shadow-sm  d-flex align-items-center justify-content-center"
                  style={{width:'36px', height:'36px'}}
                  >
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4 lp-light-wrap">
            <div className="promo-card mb-4 mt-3">
              <img src={blogBg} alt="" className="img-fluid" />
            </div>
            <div className="search-card mt-5">
              <h4 className="fw-bold">Search</h4>
              <div className="input-btn d-flex gap-3 mb-4">
                <input type="text" />
                <button>Search</button>
              </div>
            </div>
            <div className="trending-post">
              <h4 className="mb-4">Trending Post</h4>
              {[blog1,blog2,blog3,blog4].map((imgSrc,id)=>(
                <div className='d-flex align-items-center mb-4'>
                  <img src={imgSrc} className='me-3' alt="" />
                  <div>
                  <h5 className="color mb-1 fw-bold">
                    {[" Lorem ipsum dolor sit amet consectetur adipisicing elit."," Lorem ipsum dolor sit amet consectetur adipisicing elit."," Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                      " Lorem ipsum dolor sit amet consectetur adipisicing elit."," Lorem ipsum dolor sit amet consectetur adipisicing elit."][id]}
                  </h5>
                  <small className='color'>January 29 , 2020</small>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Recent posts */}
      <div className="container my-5">
        <div className="row">
          <div className="head-wrap my-3 d-flex justify-content-between align-items-center">
            <h2>Recent Posts</h2>
          </div>
        </div>
        <div className="row">
            {Datas.map((data, index)=>(
              <div className="col-lg-6" key={data.id}>
              <div className="card lp-card border rounded p-3 my-3 d-flex flex-row align-items-start gap-3">
                <img src={data.Image} alt={data.title} className="rounded img-fluid lp-post"
                style={{
                  width:'280px',
                  height:'200px',
                  objectFit:'cover'
                }}
                />
                <div className="flex-grow-1">
                  <span className={`post-span ${data.tag==='Lifestyle' ?
                  'post-span' : data.tag==='Tech' ?
                  'post-span2' : data.tag==='Business'?
                  'post-span3' : "Lifestyle"?
                  'post-span4' : ""
                  } px-3 py-1 text-uppercase`}>{data.tag}</span>
                  <h5 className="fw-bold fs-4 my-3"> {data.title}</h5>
                  <p className="mb-2 text-muted">{data.author_date} - <i className="bi bi-chart"></i>0</p>
                  <button className="btn btn-light mt-3 rounded-circle border shadow-sm  d-flex align-items-center justify-content-center"
                  style={{width:'36px', height:'36px'}}
                  >
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>

        {/* news letter */}

       <section className="py-5 subscribe border-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-md-5">
              <h2 className="fw-bold">Get the best blog stories into your inbox!</h2>
              <form className="mt-4 d-flex">
                <div className="input-group shadow-sm overflow-hidden">
                  <span className="input-group-text bg-white border-0">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input type="email" className='border-0 form-control' placeholder='Enter your email' required />
                  <button className='btn ab-sub-btn px-4 d-flex align-items-center rounded-pill' type='submit'>
                    <i className="bi bi-send me-2"></i>Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 text-center">
              <img src={subsImg} alt="" className="subscribe-img-fluid" />
            </div>
          </div>
        </div>
       </section>

    </>
  );
}

export default Index