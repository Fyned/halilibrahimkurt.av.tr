import { Link } from 'react-router-dom';
import { BreadcrumbSchema } from '../schema/SchemaMarkup';

export default function Breadcrumb({ items }) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200" aria-label="Breadcrumb">
        <div className="container-custom">
          <ol className="flex items-center flex-wrap py-4 text-sm">
            <li className="flex items-center">
              <Link
                to="/"
                className="flex items-center gap-1.5 text-gray-500 hover:text-primary-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Ana Sayfa</span>
              </Link>
            </li>
            {items.slice(1).map((item, index) => (
              <li key={item.url} className="flex items-center">
                <svg className="w-4 h-4 mx-2 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                {index === items.length - 2 ? (
                  <span className="text-primary-500 font-semibold">{item.name}</span>
                ) : (
                  <Link
                    to={item.url}
                    className="text-gray-500 hover:text-primary-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
