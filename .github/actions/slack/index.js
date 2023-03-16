import core from '@actions/core';
import github from '@actions/github';

const ActionRunner = async () => {
  try {
    const slack_webhook = core.getInput('slack_webhook');
    const text = core.getInput('message');
    const response = await fetch(slack_webhook, {
      method: 'post',
      body:{
        text
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let data = await response.json()
    core.setOutput('response', JSON.stringify(data))
  } catch (error) {
    core.setFailed(error);
  }
};

ActionRunner();
