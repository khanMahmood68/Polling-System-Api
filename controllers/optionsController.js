const Question = require('../models/questions'); // Import the Question model
const Option = require('../models/options'); // Import the Option model

module.exports.create = async function (req, res) {
    try {
        // Log the request body and ID for debugging purposes
        console.log(req.body, req.params.id);

        // Create a new option
        const option = await Option.create({
            option: req.body.content,
            question: req.params.id,
        });
        
        // Add a vote URL to the option using string interpolation
        option.add_vote = `http://localhost:8000/api/v1/question/options/${option._id}/add_vote`;
        option.save();

        // Find the question by ID
        const question = await Question.findById(req.params.id);
        if(question){
            // Append the option to the question's options array
            question.options.push(option);
            await question.save();
            console.log(question);
            res.send(question)
        }else{
            res.send('Question does not exist');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.add_vote = async (req, res)=>{
    try {
        // Log the option id for debugging purposes
        console.log(req.params.id);
        
        // Increment the vote count for the specified option 
        const option = await Option.findByIdAndUpdate(req.params.id,{ $inc: { vote: 1 } },{new:true});
        if(option){

            // Save the updated option
            await option.save();
            console.log(option);
            res.send(option);
        }else{
            res.send('Option does not exist')
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// Deleting the option by ID
module.exports.delete = async (req, res)=>{
    try {
        // Log the option ID for debugging purposes
        console.log(req.params.id);

        const option = await Option.findById(req.params.id);

        if(!option){
             // Option with the given ID does not exist
             return res.status(404).send('Option not found');
        }

        const questionId = option.question;

        const updatedQuestion = await Question.findByIdAndUpdate(questionId,
            { $pull: { options: req.params.id } }
        )
        await option.deleteOne();
        console.log(updatedQuestion);
        res.send('Option is Deleted successfully')
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}
