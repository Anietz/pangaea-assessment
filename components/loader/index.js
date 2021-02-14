import Skeleton from "react-loading-skeleton";

const Loader = () => {
    return (
      <section className="m-4 px-4 ">
        <div className="list row">
          {Array(9)
            .fill()
            .map((item, index) => (
              <div className="col-md-4" key={index}>
               <div className="card mb-3">
                    <Skeleton height={180} />
                        <h4 className="card-title">
                        <Skeleton circle={true} height={50} width={50} />  
                        <Skeleton height={36} width={`80%`} />
                        </h4>
                        <p className="card-channel">
                        <Skeleton width={`60%`} />
                        </p>
                        <div className="card-metrics">
                        <Skeleton width={`90%`} />
                        </div>
               </div>
              </div>
            ))}
        </div>
      </section>
    );
  };
  export default Loader;