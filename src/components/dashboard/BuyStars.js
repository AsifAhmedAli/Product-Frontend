import Star from "./Star"

function BuyStars() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 textColorBlue">
            <Star price="20" stars="99"/>
            <Star price="50" stars="150"/>
            <Star price="100" stars="210"/>
            <Star price="150" stars="250"/>
            <Star price="300" stars="500"/>
            <Star price="500" stars="1000"/>
        </div>
    )
}

export default BuyStars
