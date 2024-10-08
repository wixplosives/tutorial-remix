import classNames from 'classnames';
import styles from './_index.module.scss';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import type { ColorName } from '../../../src/globals/colors';
import { Box } from '~/components/common/box/box';
import { ConfettiFx } from '~/components/fx/confetti-fx/confetti-fx';
import { CursorFx } from '~/components/fx/cursor-fx/cursor-fx';
import { Task01 } from '~/components/tasks/01/task-01';
import { TaskSymbol } from '~/components/common/task-symbol/task-symbol';
import { Link } from '@remix-run/react';
import { getUrlOriginWithPath } from '~/utils';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div className={styles.root}>
            <Link to="/lesson01">Lesson 1</Link>
            <Link to="/lesson02">Lesson 2</Link>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
