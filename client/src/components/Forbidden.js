import React from 'react';

/**
 * Renders a message letting user know they are not authorized to be on that page
 */
function Forbidden() {
  return (
    <main>
      <div className="wrap">
        <h2>Forbidden</h2>
        <p>Oh oh! You can't access this page.</p>
      </div>
    </main>
  );
}

export default Forbidden;
