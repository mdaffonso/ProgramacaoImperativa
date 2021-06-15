const keywordPairs = [
    {
        keyword: "rainy",
        image: "/ico_rainy.png"
    },
    {
        keyword: "sunny",
        image: "/ico_sunny.png"
    },
    {
        keyword: "cloudy",
        image: "/ico_cloudy.png"
    },
]

const getImage = keywordPairs.filter(input => input.keyword === "cloudy")[0].image
console.log(getImage)