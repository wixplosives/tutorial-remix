    import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import styles from './lesson-02.module.scss';
import { useEffect, useState } from 'react';
import { Box } from '~/components/common/box/box';
import { ConfettiFx } from '~/components/fx/confetti-fx/confetti-fx';
import { Task02 } from '~/components/tasks/02/task-02';
import { getUrlOriginWithPath } from '~/utils';
import classNames from 'classnames';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};
export default function Lesson2() {
    const [lessonSolved, setLessonSolved] = useState(false);

    useEffect(() => {
        setLessonSolved(isSolved());
    }, []);

    return (
        <div className={styles.root}>
            <Task02 />
            <div className={styles.playground} id="playground">
                <div className={styles.row}>
                    <Box text={'1'} className={styles.box01} color={'hotPink'} />
                    <Box text={'2'} className={styles.box02} color={'turquoiseGreen'} />
                </div>
                <div className={styles.row}>
                    <Box text={'3'} className={styles.box03} color={'goldYellow'} />
                    <Box text={'4'} className={styles.box04} color={'darkLavender'} />
                </div>
                <div className={styles.row}>
                    <Box text={'5'} className={styles.box05} color={'dirtyWhite'} />
                </div>
                <div className={styles.row}>
                    <Box text={'6'} className={styles.box06} color={'richGreen'} />
                    <Box text={'7'} className={styles.box07} color={'orangeRed'} />
                    <Box text={'8'} className={styles.box08} color={'hotRed'} />
                </div>
                <ConfettiFx
                    maxParticles={400}
                    dissolve={315}
                    show={lessonSolved}
                    style={{ display: lessonSolved ? 'block' : 'none' }}
                />
            </div>
        </div>
    );
}

function isSolved(): boolean {
    const onStageRowsOrder = document.getElementById('playground')?.innerText.replace(/\n/gm, '');
    return onStageRowsOrder === '12345678';
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
