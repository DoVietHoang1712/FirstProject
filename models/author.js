const {mongoose} = require('../database/database');
const Book = require('./book');
const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: true}
});

AuthorSchema.pre('remove', function (next) {
    Book.find({author: this.id}, (err, books) => {
        if(err) return next(err);
        else if(books.length > 0){
            return next(new Error('This author has book still'));
        } else{
            next();
        }
    })
})

module.exports = mongoose.model('Author', AuthorSchema);