import React from 'react';

import { Avatar } from '..';

import { UserAvatarProps } from './UserAvatar.types';

export const UserAvatar = ({ name, avatar }: UserAvatarProps) => {
  const initial = name.charAt(0);

  return <Avatar src={avatar}>{initial}</Avatar>;
};
