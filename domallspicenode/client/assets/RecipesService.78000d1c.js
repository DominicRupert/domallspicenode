import{k as c,A as t}from"./index.10faaf57.js";class s{async getAllRecipes(){let e=await c.get("api/recipes");t.recipes=e.data}async setActiveRecipe(e){let a=await c.get("api/recipes/"+e);t.activeRecipe=a.data}async randomFiveRecipes(){let e=[];for(let a=0;a<5;a++){let i=t.recipes[Math.floor(Math.random()*t.recipes.length)];e.includes(i)?a--:e.push(i)}t.recentFavorites=e}async getProfileRecipes(e){let a=await c.get("account/"+e+"/recipes");t.activeRecipeAccountRecipes=a.data}async createRecipe(e){const a=await c.post("api/recipes",e);console.log(a.data),t.createdRecipe=a.data}}const o=new s;export{o as r};