import axios from "axios";
import DonutDetails from "../models/DonutDetails";
import Results from "../models/Results";
const key: string = process.env.REACT_APP_GIPHY_KEY || "";

export const getDonuts = (): Promise<Results> => {
    return axios
    .get("https://grandcircusco.github.io/demo-apis/donuts.json")                    
    .then((response)=>{ return response.data; })
}

export const getDonutDetails = (searchTerm: string): Promise<DonutDetails> => {
    return axios
    .get(`https://grandcircusco.github.io/demo-apis/donuts/${searchTerm}.json`)         
    .then((response)=>{ return response.data; })
}