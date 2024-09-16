import { useSearchParams } from '@remix-run/react';

export default function ErrorPage() {
    const [searchParams] = useSearchParams();

    const title = searchParams.get('title');
    const message = searchParams.get('message');

    return <div>Error View</div>;
}
