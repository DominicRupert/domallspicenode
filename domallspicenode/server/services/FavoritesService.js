import { Logger } from "sass";
import {dbContext} from "../db/DbContext";

class FavoritesService {

    async toggleFavorites(body, userId){
        let favorite = await this.getByValues(body, userId)
        if(!favorite){
            
        
    }