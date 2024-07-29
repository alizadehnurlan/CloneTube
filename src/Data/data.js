export const API_KEY = 'AIzaSyCRUNjrsrnP_xo3tm3GAfSb1jsyw0lij5E'

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M"
    }
    else if(value >=1000){
         return Math.floor(value / 1000) + "K"
    }
    else{
        return value
    }
}