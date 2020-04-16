import React, { useState } from 'react';

interface Repository {
  id: number;
  name: string;
}

interface Props {
  repositories: Repository[];
}

const RepositoryList: React.FC<Props> = ({ repositories }) => {
  const [repository, setRepository] = useState('');
  return <p>{repositories}</p>;
};

export default RepositoryList;
