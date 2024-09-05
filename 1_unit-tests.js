const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {

    // American to British
    test('Mangoes are my favorite fruit.', function(done) {
        let userString = "Mangoes are my favorite fruit.";
        let validResult = translator.translate(userString, 'american-to-british');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "Mangoes are my favourite fruit.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('I ate yogurt for breakfast.', function(done) {
        let userString = "I ate yogurt for breakfast.";
        let validResult = translator.translate(userString, 'american-to-british');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "I ate yoghurt for breakfast.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('We had a party at my friend\'s condo.', function(done) {
        let userString = "We had a party at my friend's condo.";
        let validResult = translator.translate(userString, 'american-to-british');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "We had a party at my friend's flat.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });
    
    test('Can you toss this in the trashcan for me?', function(done) {
        let userString = "Can you toss this in the trashcan for me?";
        let validResult = translator.translate(userString, 'american-to-british');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "Can you toss this in the bin for me?";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('The parking lot was full.', function(done) {
        let userString = "The parking lot was full.";
        let validResult = translator.translate(userString, 'american-to-british');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "The car park was full.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('Like a high tech Rube Goldberg machine.', function(done) {
        let userString = "Like a high tech Rube Goldberg machine.";
        let validResult = translator.translate(userString, 'american-to-british');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "Like a high tech Heath Robinson device.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('To play hooky means to skip class or work.', function(done) {
        let userString = "To play hooky means to skip class or work.";
        let validResult = translator.translate(userString, 'american-to-british');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "To bunk off means to skip class or work.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('No Mr. Bond, I expect you to die.', function(done) {
        let userString = "No Mr. Bond, I expect you to die.";
        let validResult = translator.translate(userString, 'american-to-british');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "No Mr Bond, I expect you to die.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('Dr. Grosh will see you now.', function(done) {
        let userString = "Dr. Grosh will see you now.";
        let validResult = translator.translate(userString, 'american-to-british');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "Dr Grosh will see you now.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('Lunch is at 12:15 today.', function(done) {
        let userString = "Lunch is at 12:15 today.";
        let validResult = translator.translate(userString, 'american-to-british');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "Lunch is at 12.15 today.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    // British to American
    test('We watched the footie match for a while.', function(done) {
        let userString = "We watched the footie match for a while.";
        let validResult = translator.translate(userString, 'british-to-american');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "We watched the soccer match for a while.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('Paracetamol takes up to an hour to work.', function(done) {
        let userString = "Paracetamol takes up to an hour to work.";
        let validResult = translator.translate(userString, 'british-to-american');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "Tylenol takes up to an hour to work.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('First, caramelise the onions.', function(done) {
        let userString = "First, caramelise the onions.";
        let validResult = translator.translate(userString, 'british-to-american');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "First, caramelize the onions.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('I spent the bank holiday at the funfair.', function(done) {
        let userString = "I spent the bank holiday at the funfair.";
        let validResult = translator.translate(userString, 'british-to-american');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "I spent the public holiday at the carnival.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('I had a bicky then went to the chippy.', function(done) {
        let userString = "I had a bicky then went to the chippy.";
        let validResult = translator.translate(userString, 'british-to-american');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "I had a cookie then went to the fish-and-chip shop.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('I\'ve just got bits and bobs in my bum bag.', function(done) {
        let userString = "I've just got bits and bobs in my bum bag.";
        let validResult = translator.translate(userString, 'british-to-american');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "I've just got odds and ends in my fanny pack.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('The car boot sale at Boxted Airfield was called off.', function(done) {
        let userString = "The car boot sale at Boxted Airfield was called off.";
        let validResult = translator.translate(userString, 'british-to-american');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "The swap meet at Boxted Airfield was called off.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('Have you met Mrs Kalyani?', function(done) {
        let userString = "Have you met Mrs Kalyani?";
        let validResult = translator.translate(userString, 'british-to-american');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "Have you met Mrs. Kalyani?";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('Prof Joyner of King\'s College, London.', function(done) {
        let userString = "Prof Joyner of King's College, London.";
        let validResult = translator.translate(userString, 'british-to-american');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "Prof. Joyner of King's College, London."; // Add period after "Prof."
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('Tea time is usually around 4 or 4.30.', function(done) {
        let userString = "Tea time is usually around 4 or 4.30.";
        let validResult = translator.translate(userString, 'british-to-american');
        assert.isString(validResult, "Translation result is a string");
        let expectedResult = "Tea time is usually around 4 or 4:30.";
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated");
        done();
    });

    test('Highlight translation in Mangoes are my favorite fruit.', function(done) {
        let userString = "Mangoes are my favorite fruit.";
        let validResult = translator.translate(userString, 'american-to-british', true);  // Enable highlighting
        let expectedResult = "Mangoes are my <span style=\"color: green;\">favourite</span> fruit.";
        assert.isString(validResult, "Translation result is a string");
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated and highlighted");
        done();
    });

    test('Highlight translation in I ate yogurt for breakfast.', function(done) {
        let userString = "I ate yogurt for breakfast.";
        let validResult = translator.translate(userString, 'american-to-british', true);
        let expectedResult = "I ate <span style=\"color: green;\">yoghurt</span> for breakfast.";
        assert.isString(validResult, "Translation result is a string");
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated and highlighted");
        done();
    });

    test('Highlight translation in We watched the footie match for a while.', function(done) {
        let userString = "We watched the footie match for a while.";
        let validResult = translator.translate(userString, 'british-to-american', true);  
        let expectedResult = "We watched the <span style=\"color: green;\">soccer</span> match for a while.";
        assert.isString(validResult, "Translation result is a string");
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated and highlighted");
        done();
    });

    test('Highlight translation in Paracetamol takes up to an hour to work.', function(done) {
        let userString = "Paracetamol takes up to an hour to work.";
        let validResult = translator.translate(userString, 'british-to-american', true);  
        let expectedResult = "<span style=\"color: green;\">Tylenol</span> takes up to an hour to work.";
        assert.isString(validResult, "Translation result is a string");
        assert.equal(validResult, expectedResult, "The sentence has been correctly translated and highlighted");
        done();
    });

});
