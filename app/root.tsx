import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
    useRouteError,
    useNavigate,
} from '@remix-run/react';
import { useEffect, useRef } from 'react';
import { ROUTES } from '~/router/config';
import '~/styles/index.scss';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export function ErrorBoundary() {
    const locationRef = useRef<string | undefined>(
        typeof window !== 'undefined' ? window.location.href : undefined
    );

    const error = useRouteError();

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.location.href !== locationRef.current) {
                locationRef.current = window.location.href;
                clearInterval(interval);
                // force full page reload after navigating from error boundary
                // to fix remix issue with style tags disappearing
                window.location.reload();
            }
        }, 100);
    }, []);

    const navigate = useNavigate();

    const isPageNotFoundError = isRouteErrorResponse(error) && error.status === 404;

    return <div>Error View</div>;
}

function toError(value: unknown): Error {
    if (value instanceof Error) {
        return value;
    }

    if (typeof value === 'undefined') {
        return new Error();
    }

    let errorMessage = String(value);
    if (typeof value === 'object' && value !== null) {
        if ('message' in value) {
            errorMessage = String(value.message);
        }

        if ('data' in value) {
            errorMessage = String(value.data);
        }
    }

    return new Error(errorMessage);
}
