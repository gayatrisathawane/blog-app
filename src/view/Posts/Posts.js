import './Post.css'
import data from './../../confi/data.json'
import PreviewCard from '../../component/PreviewCard/PreviewCard'
import Navbar from './../../component/Navbar/Navbar'
function Posts(){
  
    return(
      <>

      {/* <Navbar/> */}
      <div className='blog-bg'>
      <p className=' position-absolute  heading'>Read Our Blog</p>
      </div>
      <p className='fs-2 mt-5 text-center'>WEEKLY ARTICLES WITH INSIGHT INTO THE WEEKEND'S MESSAGE</p>
      <p className='fs-2 px-4'>Our blog takes the message from the weekend and lays out next right steps, so you can hear a message and do a message in practical ways.</p>
        <div className='d-flex justify-content-around flex-wrap m-4'>
        
           
              {
                data.map((posts,index)=>{
                 return <PreviewCard key={index} 
                                    id={posts.id} 
                                    title={posts.title} 
                                   subtitle={posts.subtitle}
                                    url={posts.url}
                                    date={posts.date}
                                    //  quotestitle={quotestitle}
                 />
                })
              }
           </div>
          

         </>
    )
}
export default Posts 