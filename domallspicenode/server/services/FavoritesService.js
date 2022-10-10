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
            return newFavorite
        } else{
            await this.deleteFavorite(favorite.id)
            return ('deleted')

        }
            
        
    }
    async getByValues(body, userId){
        let favorite = await dbContext.Favorite.findOne({recipeId: body.recipeId, accountId: userId})
        return favorite
    }
    async deleteFavorite(id){
        await dbContext.Favorite.deleteOne({id})
    }
}