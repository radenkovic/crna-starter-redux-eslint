import React from 'react';
import AppLayout from 'Components/AppLayout';
import { Link } from 'react-router-dom';
import routes from 'Router/routes';

export default function IndexPage() {
  return (
    <AppLayout>
      Index Page <br />
      <Link to={routes.get('dashboard')}>Go to dashboard</Link>
      <br />
      --
      <br />
      <a href="https://github.com/radenkovic">By Dan Radenkovic</a>
    </AppLayout>
  );
}
