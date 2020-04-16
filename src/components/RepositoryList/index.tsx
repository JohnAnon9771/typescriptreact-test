import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import { loadRequest } from '../../store/ducks/repositories/actions';

interface StateProps {
  repositories?: Repository[];
}

interface DispatchProps {}

type Props = StateProps & DispatchProps;

const RepositoryList: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data,
  );

  useEffect(() => {
    dispatch(loadRequest());
  }, []);

  return (
    <ul>
      {repositories.map((repository) => (
        <li>{repository.name}</li>
      ))}
    </ul>
  );
};

export default RepositoryList;
