const AttractionCard = (props) => {

  const id1 = "headingOne" + props.attraction.attractionId
  const id2 = "collapseOne" + props.attraction.attractionId

  return (
    <div className="accordion-item corners5 ">
      <h2 className="accordion-header accordianTitle purple-background" id={id1}>
        <button className="accordion-button accordianTitle white-background" type="button" data-bs-toggle="collapse" data-bs-target={"#" + id2} aria-expanded="false" aria-controls={id2}>      
          <h5 className="card-text text-white">{props.attraction.name}.</h5>
        </button>
      </h2>
      <div id={id2} className="accordion-collapse collapse opacity90" aria-labelledby={id1} data-bs-parent="#accordionExample">
        <div className=" container">
          <div className="row panel">
            <span>{props.attraction.review}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttractionCard