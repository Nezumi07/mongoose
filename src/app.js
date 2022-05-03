require("./db/connection");

const { default: mongoose } = require("mongoose");
const  yargs  = require("yargs");
const { addMovie, listMovie, deleteMovie, updateMovie } = require("./movie/methods");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            //add movie function that takes yargsObj terminal input
            await addMovie({title: yargsObj.title, actor: yargsObj.actor, rating:yargsObj.rating});
            console.log(`Successfully added ${yargsObj.title}`);
        } else if (yargsObj.list) {
            //list movies from database
            await listMovie()
        } else if (yargsObj.update) {
            //update movies with filterObj and updateObj
            await updateMovie(yargsObj)
            console.log (`Successfully updated ${yargsObj.title} to ${yargsObj.newtitle}`)
        } else if (yargsObj.delete) {
            //delete movie with filterObj
            await deleteMovie({title: yargsObj.title})
            console.log (`Successfully deleted ${yargsObj.title}`)
        } else {
        console.log ("Incorrect command")
        }
        await mongoose.disconnect()
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);

// node src/app.js --list
// node src/app.js --add --title="The Matrix" --actor="Keanu Reeves"