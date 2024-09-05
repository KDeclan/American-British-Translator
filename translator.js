const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    constructor() {
        this.reversedBritishToAmericanSpelling = this.reverseMap(americanToBritishSpelling);
        this.reversedBritishToAmericanTitles = this.reverseMap(americanToBritishTitles);
    }

    reverseMap(originalMap) {
        const reversedMap = {};
        for (const key in originalMap) {
            if (Object.hasOwnProperty.call(originalMap, key)) {
                reversedMap[originalMap[key]] = key;
            }
        }
        return reversedMap;
    }

    preserveCapitalization(original, translated) {
        if (original[0] === original[0].toUpperCase()) {
            return translated.charAt(0).toUpperCase() + translated.slice(1);
        }
        return translated;
    }

    wrapInGreen(text, highlight) {
        return highlight ? `<span style="color: green;">${text}</span>` : text;
    }

    usOnly(phrase, highlight) {
        let lowerCasePhrase = phrase.toLowerCase();
        if (americanOnly[lowerCasePhrase]) {
            const translated = this.wrapInGreen(americanOnly[lowerCasePhrase], highlight);
            return {
                translated: this.preserveCapitalization(phrase, translated),
                length: phrase.split(' ').length
            };
        }
        return null;
    }

    usToBrSpelling(phrase, highlight) {
        let lowerCasePhrase = phrase.toLowerCase();
        if (americanToBritishSpelling[lowerCasePhrase]) {
            const translated = this.wrapInGreen(americanToBritishSpelling[lowerCasePhrase], highlight);
            return {
                translated: this.preserveCapitalization(phrase, translated),
                length: phrase.split(' ').length
            };
        }
        return null;
    }

    usToBrTitles(phrase, highlight) {
        let lowerCasePhrase = phrase.toLowerCase().replace(/[.,!?]/g, '');
        if (americanToBritishTitles[`${lowerCasePhrase}.`]) {
            let translatedTitle = this.wrapInGreen(americanToBritishTitles[`${lowerCasePhrase}.`], highlight);
            return {
                translated: this.preserveCapitalization(phrase, translatedTitle),
                length: phrase.split(' ').length
            };
        }
        return null;
    }

    brOnly(phrase, highlight) {
        let lowerCasePhrase = phrase.toLowerCase();
        if (britishOnly[lowerCasePhrase]) {
            const translated = this.wrapInGreen(britishOnly[lowerCasePhrase], highlight);
            return {
                translated: this.preserveCapitalization(phrase, translated),
                length: phrase.split(' ').length
            };
        }
        return null;
    }

    brToUsSpelling(phrase, highlight) {
        let lowerCasePhrase = phrase.toLowerCase();
        if (this.reversedBritishToAmericanSpelling[lowerCasePhrase]) {
            const translated = this.wrapInGreen(this.reversedBritishToAmericanSpelling[lowerCasePhrase], highlight);
            return {
                translated: this.preserveCapitalization(phrase, translated),
                length: phrase.split(' ').length
            };
        }
        return null;
    }

    brToUsTitles(phrase, highlight) {
        let lowerCasePhrase = phrase.toLowerCase().replace(/[.,!?]/g, '');
        if (this.reversedBritishToAmericanTitles[lowerCasePhrase]) {
            let translatedTitle = this.wrapInGreen(this.reversedBritishToAmericanTitles[lowerCasePhrase], highlight);

            if (!translatedTitle.endsWith('.')) {
                translatedTitle += '.';
            }

            if (/[.,!?]/.test(phrase[phrase.length - 1])) {
                translatedTitle += phrase[phrase.length - 1];
            }

            return {
                translated: this.preserveCapitalization(phrase, translatedTitle),
                length: phrase.split(' ').length
            };
        }
        return null;
    }

    sanitizeWord(word) {
        return word.replace(/[.,!?]/g, '');
    }

    timeConversion(phrase, highlight, direction) {
        // Regex to match time in the format of 12:15 or 12.15
        const timeRegex = /\b(\d{1,2})[:.](\d{2})\b/;
        const match = phrase.match(timeRegex);
        
        if (match) {
            let separator;
            
            if (direction === 'american-to-british') {
                // Convert colon to period for British time format
                separator = '.';
            } else if (direction === 'british-to-american') {
                // Convert period to colon for American time format
                separator = ':';
            }
    
            const convertedTime = match[1] + separator + match[2];
            return phrase.replace(timeRegex, this.wrapInGreen(convertedTime, highlight));
        }
    
        return null;
    }
    

    translate(userString, direction = 'american-to-british', highlight = false) {
        let endPunctuation = '';
        if (/[.,!?]$/.test(userString)) {
            endPunctuation = userString.slice(-1);
            userString = userString.slice(0, -1);
        }
    
        let sentenceTokens = userString.split(' ');
        let result = [];
        let i = 0;
    
        let sanitizedTokens = sentenceTokens.map(word => this.sanitizeWord(word));
    
        while (i < sanitizedTokens.length) {
            let matchFound = false;
    
            for (let length = sanitizedTokens.length - i; length > 0; length--) {
                const phrase = sanitizedTokens.slice(i, i + length).join(' ');
    
                let phraseResult;
    
                if (direction === 'american-to-british') {
                    phraseResult = this.usOnly(phrase, highlight) || this.usToBrSpelling(phrase, highlight) || this.usToBrTitles(phrase, highlight);
                } else {
                    phraseResult = this.brOnly(phrase, highlight) || this.brToUsSpelling(phrase, highlight) || this.brToUsTitles(phrase, highlight);
                }
    
                if (phraseResult) {
                    result.push(phraseResult.translated);
                    i += phraseResult.length;
                    matchFound = true;
                    break;
                }
            }
    
            if (!matchFound) {
                result.push(sentenceTokens[i]);
                i++;
            }
        }
    
        let translatedSentence = result.join(' ') + endPunctuation;
    
        // Add direction to the timeConversion function call
        translatedSentence = this.timeConversion(translatedSentence, highlight, direction) || translatedSentence;
    
        // If there is no difference between original and translated, return "Everything looks good to me!"
        if (translatedSentence === userString + endPunctuation) {
            return "Everything looks good to me!";
        }
    
        return translatedSentence;
    }        
}

module.exports = Translator;

