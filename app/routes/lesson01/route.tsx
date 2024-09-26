import styles from './lesson-01.module.scss';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import { Box } from '~/components/common/box/box';
import { ConfettiFx } from '~/components/fx/confetti-fx/confetti-fx';
import { CursorFx } from '~/components/fx/cursor-fx/cursor-fx';
import { Task01 } from '~/components/tasks/01/task-01';
import { TaskSymbol } from '~/components/common/task-symbol/task-symbol';
import { ColorName } from '~/globals/colors';
import { getUrlOriginWithPath } from '~/utils';
import classNames from 'classnames';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};
const boxes: ColorName[] = [
    'lavender',
    'turquoiseGreen',
    'dirtyWhite',
    'aeroBlue',
    'hotRed',
    'hotPink',
    'goldYellow',
    'orangeRed',
    'aeroBlue',
    'richGreen',
    'darkLavender',
    'oliveGreen',
    'orangeRed',
    'pastelPink',
    'dirtyWhite',
    'richGreen',
    'oliveGreen',
    'orangeRed',
    'turquoiseGreen',
    'aeroBlue',
    'darkLavender',
    'hotRed',
    'hotPink',
];

export default function Lesson01() {
    const [visible, setVisible] = useState<boolean[]>(
        boxes.map(() => {
            return true;
        })
    );
    return (
        <div className={styles.root}>
            <Task01 />
            <div className={styles.playground}>
                {boxes.map((color, idx) => (
                    <Box
                        key={idx}
                        color={color}
                        className={`${styles.boxes} ${visible[idx] || styles.fadeOut}`}
                        onMouseEnter={() => {
                            const boxesVisibility = [...visible];
                            boxesVisibility[idx] = false;
                            setVisible(boxesVisibility);
                        }}
                    />
                ))}
                <CursorFx />
                <ConfettiFx
                    maxParticles={400}
                    dissolve={315}
                    show={visible.every((value) => value === false)}
                />
            </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Lesson 01';
    const description = 'Welcome to the first lesson of Codux tutorial';
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
