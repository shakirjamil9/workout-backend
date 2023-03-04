const { openai } = require('../../../utils');
const { template, replacedTemplate } = require('./utils');

exports.generatePlan = async (req, res) => {
  const prompt = replacedTemplate(template, req.body);

  try {
    const plan = await openai.createCompletion({
      prompt,
      model: 'text-davinci-003',
      n: 1,
      max_tokens: 2096,
      temperature: 0,
    });

    res.json({
      status: 'success',
      plan: plan.data.choices[0].text,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
