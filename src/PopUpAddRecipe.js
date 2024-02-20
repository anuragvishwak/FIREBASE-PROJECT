import React from 'react'
import { useState } from 'react';

function PopUpAddRecipe() {
    const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div>
 <div className='parent'>
        <button  className='openingMenu' onClick={() => setMenuOpen(!isMenuOpen)}>Open</button>
      </div>

<div>
{isMenuOpen && (
          <div className="popup-menu">
           </div>
  )
}
</div>
</div>
)
}

export default PopUpAddRecipe