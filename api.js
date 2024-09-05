'use strict';

const Translator = require('../components/translator.js');
const express = require('express');
const app = express();

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;
      
      if (!text || !locale) {
        return res.json({ error: 'Required field(s) missing' });
      }
      
      let translationResult;
      if (locale === 'american-to-british') {
        translationResult = translator.translate(text, 'american-to-british');
      } else if (locale === 'british-to-american') {
        translationResult = translator.translate(text, 'british-to-american');
      } else {
        return res.json({ error: 'Invalid value for locale field' });
      }

      res.json({ text, translation: translationResult });
    });
};
