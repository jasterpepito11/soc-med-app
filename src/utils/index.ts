import axios from "axios";
import jwt_decode from "jwt-decode";

export const createOrGetUser = async (response:any) => {
    const userDecoded: { name: string, picture: string, sub: string }
     = jwt_decode(response.credential);
    //get only needed details
    const user = {
        id: userDecoded.sub,
        userName: userDecoded.name,
        picture: userDecoded.picture
    }
    //save to localStorage
    localStorage.setItem('user', JSON.stringify(user));

}