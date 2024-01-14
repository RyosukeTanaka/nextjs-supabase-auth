import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import SignOut from 'src/components/SignOut';

export default async function Profile() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  // Convert UTC date to JST
  const convertToJST = (dateString) => {
    const date = new Date(dateString);
    const utcDate = new Date(date.toUTCString());
    utcDate.setHours(utcDate.getHours() + 9); // JST is UTC+9
    return utcDate.toISOString().replace('T', ' ').slice(0, 19); // format as 'YYYY-MM-DD HH:MM:SS'
  };

  return (
    <div className="card">
      <h2>ユーザー情報</h2>
      <code className="highlight">{user.email}</code>
      <div className="heading">最終サインイン:</div>
      <code className="highlight">{convertToJST(user.last_sign_in_at)}</code>
      <Link className="button" href="/">
        戻る
      </Link>
      <SignOut />
    </div>
  );
}
