import { Link } from '@mui/material';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Message } from './components/Message';

function Room() {
  const { roomId } = useParams();

  return (
    <div>
      <div>
        <Link href="..">Back</Link>
      </div>
      Room ID: {roomId}

      <Message
        avatar=""
        messages={[
          'Hi Jenny, How r u today?',
          'Did you train yesterday',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
        ]}
      />

      <Message
        itsMe
        avatar=""
        messages={[
          'Great! What\'s about you?',
          'Of course I did. Speaking of which check this out',
        ]}
      />

      <Message
        avatar=""
        messages={[
          'Im good.',
          'See u later.',
        ]}
      />
    </div>
  );
}

const mapState = () => ({});
const mapDispatch = {};

export default connect()(Room);
