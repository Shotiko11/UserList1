import React from 'react';

const UserList = ({usersList, onDelete, onEditUser}) => {
    return(
        <div>
            {usersList.length !== 0 ? usersList.map((user) => {
            return <React.Fragment key={user.id}>
                <p>{user.name}</p>
                <p>{user.surname}</p>
                <button onClick={() => onEditUser(user)}>edit</button>
                <button onClick={() => onDelete(user.id)}>delete</button>
            </React.Fragment>
        }) : "empty"}
        </div> 
    )//giti giyenia xo?wegan gamoweras mtxovda
};
 
export default UserList