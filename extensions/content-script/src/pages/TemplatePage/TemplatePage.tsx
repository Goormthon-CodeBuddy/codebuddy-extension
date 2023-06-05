import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../main';

const TemplatePage = () => {
  const { roomIndex } = useContext(AppContext);

  const handleNotification = () => {
    chrome.runtime.sendMessage({ action: 'createNotification' });
  };

  const codeExplainUrl = 'http://localhost:8080/api/code-explanation';
  const codeExplain = async () => {
    const payload = {
      prompt: 'System.out.println("Codebuddy")',
      description: '',
      stack: '',
      roomIndex: roomIndex,
    };

    try {
      const response = await fetch(codeExplainUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      console.log(data);
      handleNotification();
    } catch (error) {
      console.log(error);
    }
  };

  const errorSolutionUrl = 'http://localhost:8080/api/error-solution';
  const errorSolution = async () => {
    const payload = {
      prompt: "system.out.println('codebuddy')",
      description: '',
      stack: '',
      roomIndex: roomIndex,
    };

    try {
      const response = await fetch(errorSolutionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      console.log(data);
      handleNotification();
    } catch (error) {
      console.log(error);
    }
  };

  const codeRefactoringUrl = 'http://localhost:8080/api/code-refactoring';
  const codeRefactoring = async () => {
    const payload = {
      prompt:
        'exports.codeExplanation = async ({ code }: { code: string }) => {\n  try {\n      const { data } = await chatGPTCore({\n      code,\n      template: GPT_TEMPLATE.CODE_EXPLANATION,\n    });\n\n    const rawAnswer = data?.choices[0]?.message.content;\n\n    let details = "";\n\n    details = rawAnswer\n      .substring(\n        rawAnswer.indexOf("<DETAILS>") + 9,\n        rawAnswer.indexOf("</DETAILS>")\n      )\n      .trim();\n    return details;\n  } catch (error) {\n    return error;\n  }\n}',
      description: '',
      stack: '',
      roomIndex: roomIndex,
    };

    try {
      const response = await fetch(codeRefactoringUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      console.log(data);
      handleNotification();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(roomIndex);
    codeExplain();
  }, []);

  return <div>1</div>;
};

export default TemplatePage;
