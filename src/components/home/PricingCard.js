function PricingCard({type,price,cut,color}) {
    return (
      <div>
        {color == "white" ? (
          <div className="pricingCard1">
            <p>{type}</p>
            <p className="textHeading mb-6">Rs{price}</p>
            <p>Watch YouTube Video</p>
            <p>Watch Adds</p>
            <p>Survey / Data Entry</p>
            <p>Completed Task</p>
            <p>Share Post / Subscribe</p>
            <p>Play Games</p>
            <div>
              <button className="pricingBtn1">Purchase</button>
            </div>
          </div>
        ) : (
          <div className="pricingCard2">
            <p>{type}</p>
            <p className="textHeading mb-6">Rs{price}</p>
            <p>Watch YouTube Video</p>
            <p>Watch Adds</p>
            <p>Survey / Data Entry</p>
            <p>Completed Task</p>
            <p>Share Post / Subscribe</p>
            <p>Play Games</p>
            <div>
              <button className="pricingBtn2 textColorBlue">Purchase</button>
            </div>
          </div>
        )}
      </div>
    )
}

export default PricingCard
