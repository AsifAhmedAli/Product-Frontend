function EarningCard({ logo, heading, text }) {
  return (
    <div>
      <div className="earningCard">
        <i className={`${logo} text-3xl`}></i>
        <p>{heading}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default EarningCard
