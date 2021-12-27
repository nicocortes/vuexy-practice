

const apiKey = process.env.REACT_APP_UDEMY_APIKEY

export const getCursos = async () => {
    try {
        const resp = await fetch("https://udemy-courses-coupon-code.p.rapidapi.com/api/udemy_course/", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "udemy-courses-coupon-code.p.rapidapi.com",
                "x-rapidapi-key": `${apiKey}`
            }
        })
        const data = await resp.json()
    
        return data
        
    } catch (error) {
        console.log(error)
    }

}