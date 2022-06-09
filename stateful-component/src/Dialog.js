import React from 'react';
import { createPortal } from 'react-dom';

export default function Dialog() {
  return createPortal(
    <div>Dialog</div>,
    document.getElementById('dialog-zone')
  );
}
