import EarningHistory from "./EarningHistory"

function EarningHistoryList() {
    return (
        <div className="my-4">
            <EarningHistory task="Watching YoutTube video" points="100" time="7 min"/>
            <EarningHistory task="Watching ads" points="50" time="8 hours"/>
            <EarningHistory task="PLay games" points="300" time="10 hours"/>
            <EarningHistory task="Watching ads" points="50" time="3 days"/>
            <EarningHistory task="Watching YoutTube video" points="100" time="6 days"/>
            <EarningHistory task="Play Games" points="50" time="10 days"/>
        </div>
    )
}

export default EarningHistoryList
