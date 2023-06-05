import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../App';

const TemplatePage = () => {
  const { roomIndex } = useContext(AppContext);

  const url = 'http://localhost:8080/api/code-explanation';
  const codeExplain = async () => {
    const payload = {
      prompt: 'System.out.println("Codebuddy")',
    };

    try {
      const response = await fetch(url, {
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(roomIndex);
    codeExplain();
  }, []);

  return (
    <div>
      <div className={style.TemplatePage}>
        <SoftwareStackDropdown />
        <QuestionType />
        <CodeMirrorEditor code="1234" />
        <SearchInput />
      </div>
    </div>
  );
};

export default TemplatePage;
