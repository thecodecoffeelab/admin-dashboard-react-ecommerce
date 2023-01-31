import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
          <iframe
                    style={{
                      background: "#FFFFFF",
                      border:"none",
                      borderRadius: "2px",
                      boxShadow:"0 2px 10px 0 rgba(70, 76, 79, .2);",
                      width:"100%",
                      height:"350px",
                    }}  
          src="https://charts.mongodb.com/charts-jeufzone-ropot/embed/charts?id=63d63356-4d04-45fb-8c8d-d900bbc6418b&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
