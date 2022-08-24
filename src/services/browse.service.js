import db from "../db/db.js"

export const getMostCommentedGame = async (type) => {
    const result = await db.raw(
        `select type.id, type.name, g.id, g."mainPhoto", g.num_of_comments, g.price
            from type
            left join "gameType" gT on type.id = gT."typeId"
            left join (
                select game.id, game."mainPhoto", game.price, count(comment) as num_of_comments
                from game
                    left join comment c on game.id = c."gameId"
                group by game.id
            ) g on gT."gameId" = g.id
            where type.name = '${type}'
        order by type.name asc, g.num_of_comments desc`
    )
    return result
}

export const getMostFavoritedGames = async (type) => {
    const result = await db.raw(`select type.id, type.name, g.id, g."mainPhoto", g.num_of_favorites, g.price
    from type
             left join "gameType" gT on type.id = gT."typeId"
             left join (
                select game.id, game."mainPhoto", game.price, count(f."gameId") as num_of_favorites
                from game
                    left join favorite f on game.id = f."gameId"
                group by game.id
            ) g on gT."gameId" = g.id
            where type.name = '${type}'
    order by type.name asc, g.num_of_favorites desc`)
    return result
}

export const getMostRatedGames = async (type) => {
    const result = await db.raw(`select type.id, type.name, g.id, g."mainPhoto", g.num_of_ratings, g.price
    from type
             left join "gameType" gT on type.id = gT."typeId"
             left join (
                select game.id, game."mainPhoto", game.price, count("ratingNumber") as num_of_ratings
                from game
                    left join rating r on game.id = r."gameId"
                group by game.id
            ) g on gT."gameId" = g.id
            where type.name = '${type}'
    order by type.name asc, g.num_of_ratings desc`)
    return result;
}

export const getMostPricedGames = async (type) => {
    const result = await db.raw(`select type.id, type.name, g.id, g."mainPhoto", g."price"
    from type
             left join "gameType" gT on type.id = gT."typeId"
             left join (
                select game.id, game."mainPhoto", game."price"
                from game
                group by game.id
            ) g on gT."gameId" = g.id
            where type.name = '${type}'
    order by type.name asc, g.price DESC`)
    return result
}