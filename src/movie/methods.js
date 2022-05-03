const Movie = require("./model");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error);
        
    }
}

exports.listMovie = async () => {
    try {
        const findResult = await Movie.find();
        console.log(findResult)
    } catch (error){
        console.log(error);
    }
}

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.updateOne(
            {title: movieObj.title},
            {title: movieObj.newtitle}
        )
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.deleteOne(movieObj) 
    } catch (error){
        console.log(error);
    }
}

//node src/app.js --add --title="Rushmore" --actor="Jason Schwartzman"
