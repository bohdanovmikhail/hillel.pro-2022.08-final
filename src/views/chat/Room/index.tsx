import { useState } from 'react';
import { Link } from '@mui/material';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { faker } from '@faker-js/faker';

import { Message } from './components/Message';
import { IState } from '@core/store';
import { messagesSend, messagesReceive } from '@store/messages';
import { MessageModel } from '@models';

function Room({ messages, send }: IProps) {
  const [text, setText] = useState('');
  const { roomId } = useParams();

  const sendHandler = () => {
    if (text) {
      send(text);
      setText('');
    }
  };

  return (
    <div>
      <div>
        <Link href="..">Back</Link>
      </div>
      Room ID: {roomId}

      {messages.map((message, index) => (
        <Message
          key={index}
          itsMe={message.fromUserId === '1111'}
          avatar=""
          messages={[message.text]}
        />
      ))}

      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={sendHandler}>Send</button>
    </div>
  );
}

const mapState = (state: IState) => ({
  messages: state.messages.list,
});

const mapDispatch = (d: any) => ({
  send: (text: string) => d((dispatch: any) => {
    dispatch(messagesSend(text));

    setTimeout(() => {
      dispatch(messagesReceive(faker.lorem.text()));
    }, 1000);
    setTimeout(() => {
      dispatch(messagesReceive(faker.lorem.text()));
    }, 3000);
  }),
});

export default connect(mapState, mapDispatch)(Room);

interface IProps {
  messages: MessageModel[];
  send: (text: string) => void;
}
