import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who are we?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolore aut aperiam doloribus eligendi magni non repellendus natus at illo, impedit sed voluptatum itaque delectus aspernatur et sapiente ullam ratione fuga quis quasi? Est fuga beatae incidunt deserunt laudantium autem omnis, hic animi, asperiores assumenda error nobis, rem doloremque sed.</p>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel nesciunt totam. Blanditiis vitae ut ipsum dolore accusantium vel repellendus libero nihil error veritatis incidunt quasi eveniet minus soluta, hic delectus aliquid ex optio possimus!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corrupti ullam vero.</p>
        <p>Lorem, ipsum dolor.</p>
      </div>

    </div>
  )
}

export default Biography
