import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return <div className="pt-32 pb-24 px-6 text-center min-h-screen bg-warm-50">
    <SEO title="Page not found" description="This page could not be found. Browse our roofing services or contact Hampshire Roof Care." noindex />
    <h1 className="font-heading text-3xl font-bold mb-4">Page not found</h1>
    <p className="mb-6">The page may have moved, or the address may be incorrect.</p>
    <Link to="/services" className="text-primary-600 underline">Browse roofing services</Link>
  </div>;
}
