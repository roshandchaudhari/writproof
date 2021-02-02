import logo from './logo.svg'
import './App.css'
import Blogdata from './Blogdata'
import Card from './Card'

function Blog() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Blogs</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Blogdata.map((val, index) => {
                return <Card key={index} imgsrc={val.imgsrc} title={val.title} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
