import { Logger } from "sass";
import {dbContext} from "../db/DbContext";

class FavoritesService {

    async toggleFavorites(body, userId){
        let favorite = await this.getByValues(body, userId)
        if(!favorite){
            body.accountId = userId
            let newFavorite = await dbContext.Favorite.create(body)
            await newFavorite.populate('recipe')
            await newFavorite.recipe.populate('creator')
            
        
    }