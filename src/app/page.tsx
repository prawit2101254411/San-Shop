import React from 'react'
import Slideshow from '@/compronent/slideshow/SlideShowForm'
import NavBar from '@/compronent/nevigation/NavBar'

export default function page() {
  return (
    <div>
      <Slideshow />
      <div className=' w-full h-full bg-slate-600 p-5 grid grid-cols-2 xl:grid-cols-6'>
        <div className="card card-compact w-40 mt-3 xl:w-52 bg-base-100 shadow-xl ">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
