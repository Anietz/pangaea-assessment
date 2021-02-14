export  default function Filter(){
    return (
            <div className="filter pt-2">
               <div className="container pt-5">
                <div className="row py-md-5 p-sm-1" >
                    <div className="col-md-8 pb-3 pt-4  info" > 
                        <h1 className="mb-3">All Products</h1>
                        <span>A 360<sup>o</sup> look at Lumin</span>
                    </div>
                     <div className="filter-form col-md-4  pb-4 pt-5"> 
                        <select defaultValue={'Filter By'} className="form-control pointer">
                          <option >Filter By</option>
                        </select>
                        <span className="select-icon"><i className="fa fa-angle-down"></i></span>
                    </div>
                </div>
             </div>
           </div>
    )
}