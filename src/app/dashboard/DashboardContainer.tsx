import React, { useState } from 'react';

import { PROFILES as profilesMock } from 'api/mocks/profiles';
import { useAuthState } from 'hooks/useAuthState/useAuthState';

import { Dashboard } from './Dashboard';
import { Message as MessageType, Profile } from './Dashboard.types';

export const DashboardContainer = () => {
  const { user: currentUser } = useAuthState();
  const profiles: Profile[] = profilesMock;
  const [selectedProfile, setSelectedProfile] = useState<Profile>();
  const [messages, setMessages] = useState<MessageType[]>([]);

  const handleSubmitMessage = (message: string) => {
    setMessages([
      ...messages,
      {
        id: `${messages.length + 1}`,
        sender: currentUser,
        receiver: selectedProfile!,
        message,
        createdAt: new Date().toISOString(),
      },
      // MOCK THE TARGET USER REPLY
      {
        id: `${messages.length + 2}`,
        sender: selectedProfile!,
        receiver: currentUser,
        message: `Reply to ${message}`,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  return (
    <Dashboard
      currentUser={currentUser}
      profiles={profiles}
      selectedProfile={selectedProfile}
      messages={messages.filter(
        (message) =>
          (message.sender.id === currentUser.id && message.receiver.id === selectedProfile?.id) ||
          (message.receiver.id === currentUser.id && message.sender.id === selectedProfile?.id),
      )}
      onSelectProfile={setSelectedProfile}
      onSubmitMessage={handleSubmitMessage}
    />
  );
};
