import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa animi corrupti, commodi eaque soluta nihil! Exercitationem qui voluptates, ducimus, aperiam similique, doloremque sed vel nisi sit esse molestiae recusandae cumque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae reiciendis magni soluta error exercitationem fuga doloribus quis, vero repellat fugit eaque perferendis eum quisquam cumque ipsa rem praesentium earum incidunt!</p>
        </div>
    </div>
  )
}

export default DescriptionBox