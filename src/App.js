import React from 'react';

import Sidebar from './components/Sidebar'
import Profiles from './components/Profiles'
import ProfileDetails from './components/ProfileDetails'
import Conversation from './components/Conversation'
import Actions from './components/Actions'




const App =() => {
  return (
    <div>
      <Sidebar />
      <Profiles />
      <ProfileDetails/>
      <Conversation/>
      <Actions/>
    </div>
  );
}

export default App;