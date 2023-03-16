const core = require('@actions/core');
const fetch = require('node-fetch');

const ActionRunner = async () => {
  try {
    const slack_webhook = core.getInput('slack_webhook');
    const text = core.getInput('message');
    await fetch(slack_webhook, {
      method: 'post',
      body: JSON.stringify({
        text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = 'Message Sent Successfully.!!!';
    console.log(response);
    core.setOutput('response', response);
  } catch (error) {
    core.setFailed(error);
  }
};

ActionRunner();
