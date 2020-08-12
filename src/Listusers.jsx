import React from 'react';

export const listUsers = (state) => {
    const users = localstate.loading ? (
      <img className="loadingGif" src="/loading.gif" alt="loading. Data.." />
    ) : state.users.length < 1 ? (
      <h1>empty..<br/>try add new users</h1>
    ) : (
      state.users.map((Element) => (
        <div key={Element.id}>
          <ul>
            
            <li>
              <Link to={`/${Element.id}`}>{Element.name}</Link>
              <button
                className="btn-del"
                id={Element.id}
                onClick={handleDelete}
              >
                del
              </button>
            </li>
          </ul>
        </div>
      ))
    );

    return users;
  };