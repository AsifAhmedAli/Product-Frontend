import EarningCard from "./EarningCard"

function Earning() {
  return (
    <div className="textColorBlue">
      <div>
        <div className="textHeading">
          {/* heading */}
          <p>How To Earn</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-12">
          {/* grid */}
          <EarningCard
            logo="fab fa-youtube"
            heading="Watch Youtube Video"
            text="Develop a website by ﬁnding a product identity that has value and
branding to become a"
          />
          <EarningCard
            logo="far fa-image"
            heading="Watch Adds"
            text="Develop a website by ﬁnding a product identity that has value and
branding to become a"
          />
          <EarningCard
            logo="fas fa-paint-brush"
            heading="Survey / Data Entry"
            text="Develop a website by ﬁnding a product identity that has value and
branding to become a"
          />
          <EarningCard
            logo="fas fa-clipboard-list"
            heading="Completed Task"
            text="Develop a website by ﬁnding a product identity that has value and
branding to become a"
          />
          <EarningCard
            logo="fas fa-share-alt-square"
            heading="Share Post / Subscribe"
            text="Develop a website by ﬁnding a product identity that has value and
branding to become a"
          />
          <EarningCard
            logo="fas fa-dice-two"
            heading="Play Games"
            text="Develop a website by ﬁnding a product identity that has value and
branding to become a"
          />
        </div>
      </div>
    </div>
  )
}

export default Earning
