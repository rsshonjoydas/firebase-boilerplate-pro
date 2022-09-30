import { useState } from 'react';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import Settings from '../components/Profile/Settings';

const profile = () => {
  const [onSetting, setOnSetting] = useState(false);

  return (
    <Layout title='Profile'>
      {onSetting ? (
        <Settings setOnSetting={setOnSetting} />
      ) : (
        <Profile setOnSetting={setOnSetting} />
      )}
    </Layout>
  );
};

export default profile;
