const Question = require('../models/questions');
const Option = require('../models/options');

// Creating the question

module.exports.create = async (req, res)=>{
    try {
        console.log(req.body);
        const question = await Question.create(req.body);
            console.log(question);
            res.send(question);
    } catch (error) {
        console.log(error);
    }
}

// Displaying the question details
module.exports.showDetails = async (req, res)=>{
    try {
        console.log(req.params.id);
        const question = await Question.findById(req.params.id).populate('options');
        res.send(question);
    } catch (error) {
        console.log(`id does't exist ${error}`);
    }
}

// Deleting the questions
module.exports.deleteQues = async function (req, res) {
    try {
        // Find the question by ID
        const question = await Question.findById(req.params.id).catch(function (err) {
            console.log(err);
        });

        if (question) {
            // Delete the question
            await Question.deleteOne({ _id: req.params.id }).catch(function (err) {
                console.log(err);
            });

            // Delete all options associated with the question
            await Option.deleteMany({ question: req.params.id }).catch(function (err) {
                console.log(err);
            });

            res.send("Question and options are deleted");
        } else {
            // If the question of the given ID does not exist
            res.send('Question does not exist');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

