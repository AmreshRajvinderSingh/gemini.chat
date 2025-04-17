import axios from "axios";

export const FetchChatResponse = async (question) =>{

const API_URL="http://localhost:5454/api/qna/ask";

    try{
        

        const response= await axios.post(API_URL, {question});
        return response.data;
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
}