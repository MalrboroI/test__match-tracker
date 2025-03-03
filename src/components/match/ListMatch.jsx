import React, { memo } from 'react';
import MatchItem from "../match/MatchItem";

const ListMatch = memo(({ matches }) => {
  return (
    <div className="match-list">
      {matches.map((item) => (
        <MatchItem key={item.title} item={item} />
      ))}
    </div>
  );
});

export default ListMatch;
