import React from "react";

const Card = ({ user, selectUser }) => {
  return (
    <div className="card" onClick={(e) => selectUser(user, e)}>
      <div>
        <span>{user.gender}</span>.<span>{user.nat}</span>
        <h3>{`${user.name.title}. ${user.name.first}  ${user.name.last}`}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Card;
