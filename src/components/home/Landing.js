import HomeBtn from "../../elements/HomeBtn"

function Landing() {
  return (
    <div className="sm:mb-48 lg:mb-80">
      {/* main */}
      <div className="grid grid-cols-1 lg:grid-cols-2 py-6">
        {/* grid  */}
        <div className="flex flex-col justify-between textColorBlue h-96 m-4 mb-12">
          {/* text section */}
          <div className="textHeading">
            {/* heading */}
            <p>Let&apos;s start</p>
            <p>earning with us</p>
          </div>
          <div>
            {/* subheading */}
            <p>
              Develop a website by ﬁnding a product identity that has value and
              branding to become a character of a company
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {/* buttons */}
            <HomeBtn text="Contact Us" background="blue" />
            <HomeBtn text="Introductory Video" />
          </div>
        </div>
        <div className="relative">
          <img
            className="absolute -top-24 z-0"
            src="/assets/blob.svg"
            alt=""
          />
          <div className="relative rounded-lg h-96">
            {/* video */}
            <iframe
              className="rounded-lg shadow-2xl object-contain"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8FqlTslU22s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
