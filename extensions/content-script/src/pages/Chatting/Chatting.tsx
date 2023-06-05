import React from 'react';
import style from './Chatting.module.scss';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import Chat from '../../components/Chat';
const Chatting = () => {
  const chattingData = {
    result: true,
    data: {
      messages: [
        {
          _id: '647e49747c3c7e8f58a17f89',
          room_index: 55,
          template_index: 1,
          content: {
            code: 'System.out.println("Codebuddy")',
            description: '',
            stack: '',
          },
          is_answer: false,
          created_at: '2023-06-05T20:45:40.975Z',
          m_index: 36,
          __v: 0,
        },
        {
          _id: '647e49757c3c7e8f58a17f8d',
          room_index: 55,
          template_index: 1,
          content: {
            details:
              '[CODE]:\nSystem.out.println("Codebuddy")\n\n[DESCRIPTION]:\n\n이 코드는 Java 언어로 작성된 콘솔 로그 출력 코드입니다. "Codebuddy"라는 문자열을 화면에 출력합니다.',
          },
          is_answer: true,
          created_at: '2023-06-05T20:45:41.013Z',
          m_index: 37,
          __v: 0,
        },
      ],
    },
  };
  return (
    <div className="wrapper">
      <Header />
      <div className={style.Chatting__container}>
        {chattingData.result &&
          chattingData.data.messages.map((message) => (
            <Chat message={message} />
          ))}
      </div>

      <SearchInput />
    </div>
  );
};

export default Chatting;
