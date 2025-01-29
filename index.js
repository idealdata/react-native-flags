// @flow

import React from 'react';
import { Image } from 'react-native';
import * as flags from './flags';

type Props = {
  size: 24,
  code: string,
  type?: 'flat' | 'shiny',
  style?: any,
};

const Flag = ({ size = 24, code, type = 'shiny', style }: Props) => {
  const flag = flags[type][`icons${size}`][code];
  const unknownFlag = flags[type][`icons${size}`]['unknown'];

  return (
    <Image
      source={flag || unknownFlag}
      style={[{ width: size, height: size }, style]}
    />
  );
};

export default Flag;
