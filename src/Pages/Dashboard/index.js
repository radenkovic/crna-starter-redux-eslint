import React from 'react';
import AppLayout from 'Components/AppLayout';
import { Link } from 'react-router-dom';
import routes from 'Router/routes';

export default function DashboardPage() {
  return (
    <AppLayout>
      Dashboard Page
      <br />
      <Link to={routes.get('index')}>Go to index</Link>
    </AppLayout>
  );
}
