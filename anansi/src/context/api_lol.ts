import axios from "axios";

class DataRepository {
    static getChampions = () => {
        const res = axios.get('https://ddragon.leagueoflegends.com/cdn/15.5.1/data/en_US/champion.json')
        .then(response => {
            if( response.status === 200) {
                const a = Object.values(response.data);
                return JSON.stringify(a); 
            }
        })
        .catch(e => console.error);
        return ;
    }
}


export default DataRepository;

