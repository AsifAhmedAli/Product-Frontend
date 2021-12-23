import VideosRecord from "./VideosRecord"

function Videos() {
  return (
    <div className="bg-white rounded-lg p-12">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-700">
        <table className="table textColorBlue table-auto w-full">
          <thead className="">
            <th>ID</th>
            <th>Description</th>
            <th>Upload Date</th>
            <th>Status</th>
            <th>Type</th>
            <th>Stars Required</th>
            <th>Action</th>
          </thead>
          <tbody>
            <VideosRecord
              id="212324"
              name="YouTube Video"
              status="Show"
              date="21/09/2021"
              type="free"
              stars="0"
            />
            <VideosRecord
              id="212325"
              name="Ads"
              status="Hide"
              date="21/09/2021"
              type="free"
              stars="0"
            />
            <VideosRecord
              id="212326"
              name="Ads"
              status="Running"
              date="21/09/2021"
              type="free"
              stars="0"
            />
            <VideosRecord
              id="212327"
              name="Video"
              status="Running"
              date="21/09/2021"
              type="free"
              stars="0"
            />
            <VideosRecord
              id="212328"
              name="Ads"
              status="Running"
              date="21/09/2021"
              type="free"
              stars="0"
            />
            <VideosRecord
              id="212329"
              name="YouTube Video"
              status="Hide"
              date="21/09/2021"
              type="free"
              stars="0"
            />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Videos
