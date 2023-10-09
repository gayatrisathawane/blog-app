import { Link } from 'react-router-dom';
import './PreviewCard.css'
const PreviewCard = ({id,url,title,subtitle,date}) =>{
    return(
        <>
        <div className='preview-card '>
          <Link to={`/posts/postread/${id}`} className='linkpreviewcard'>
              
                  <img src={url} className='imgcard'/>
                  <div className='p-2'>
                       <h4>{title}</h4> 

                       <p className='fs-5'>{subtitle}</p>
                       <p className='fs-5'>{date}</p>
                       </div>
                      
                  </Link>

                 
             
        </div>  
        </>
    );

}

export default PreviewCard;