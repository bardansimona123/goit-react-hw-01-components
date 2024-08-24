import React from 'react';
import Profile from './Profile/Profile'; // Importă componenta din folderul Profile
import user from './Profile/user.json'; // Importă datele din user.json
const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
export default App;












