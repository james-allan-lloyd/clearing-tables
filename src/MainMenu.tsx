import React, { useState } from 'react';

export function MainMenu({ onStart }: { onStart: (tableNumber: number) => void; }): JSX.Element {
  const [tableNumber, setTableNumber] = useState(Math.floor(Math.random() * 10) + 1);
  return <div>
    <p>Table Clearer</p>
    <form onSubmit={(evt) => { evt.preventDefault(); onStart(tableNumber); }}>
      <table>
        <tbody>
          <tr><td>Table Number</td><td><input type="number" min={1} max={10} value={tableNumber} onChange={(e) => setTableNumber(parseInt(e.target.value))} /></td></tr>
          <tr><td><input type="submit" value='Start' /></td></tr>
        </tbody>
      </table>
    </form>
  </div>;
}
