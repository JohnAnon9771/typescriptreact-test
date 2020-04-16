import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadSuccess(): void;
}

type Props = StateProps & DispatchProps;

const RepositoryList: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data,
  );

  return <ul>{repositories.map((repository) => repository.name)}</ul>;
};

export default RepositoryList;
