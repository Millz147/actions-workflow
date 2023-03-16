const core = require('@actions/core');
const fetch = require('node-fetch');

const ActionRunner = async () => {
  try {
    const slack_webhook = core.getInput('slack_webhook');
    const text = core.getInput('message');
    const response = await fetch(slack_webhook, {
      method: 'post',
      body: JSON.stringify({
        text,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let data = await JSON.parse(response)
    core.setOutput('response', JSON.stringify(data));
  } catch (error) {
    core.setFailed(error);
  }
};

ActionRunner();
