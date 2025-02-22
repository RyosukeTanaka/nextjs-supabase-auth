'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react';

export default function SignOut() {
  const supabase = createClientComponentClient();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      // eslint-disable-next-line no-console
      console.error('ERROR:', error);
    }
  }

  return (
    <button type="button" className="button-inverse" onClick={handleSignOut}>
サインアウト    </button>
  );
}
