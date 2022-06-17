import axios from 'axios'

export class DataRepository{

    async fetchData(roomId){
        try {
            const response = await axios.get(`http://localhost:8080/adria/${roomId}`)

            return response.data;
        }
        catch (e){
            console.log(e)
        }

    }
}