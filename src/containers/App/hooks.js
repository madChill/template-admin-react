import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import { ROUTE, ROLES, LOGIN_KEY } from 'utils/constants';
import { person, validateTimeToServer } from 'utils/helpers';

import * as Api from 'utils/api';
import { toast } from 'react-toast';

export function useLogic(init = { isOnline: false }) {
  const history = useHistory();
  const [loading, setloading] = useState(false);
  const [error1, seterror1] = useState(false);

  return {
    loading,
  };
}
