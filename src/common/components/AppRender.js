'use strict';

import React from 'react';
import Screen from './Screen';
import Keyboard from './Keyboard';

export default function () {
  return (
    <div className='main'>
      <Screen />
      <Keyboard />
    </div>
  );
}
