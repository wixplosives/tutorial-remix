import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import styles from './lesson-03.module.scss';
import { useEffect, useState } from 'react';
import { ConfettiFx } from '~/components/fx/confetti-fx/confetti-fx';
import { getUrlOriginWithPath } from '~/utils';
import { Task03 } from '~/components/tasks/03/task-03';
import { Pupil } from '~/components/lessons/pupil/pupil';
import classNames from 'classnames';
import { Pupil as Pupil0 } from '../../../src/components/lessons/pupil/pupil';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};
export default function Lesson3() {
    const [lessonSolved, setLessonSolved] = useState(false);

    useEffect(() => {
        setLessonSolved(isSolved());
    }, []);

    return (
        <div className={styles.root}>
            <Task03 />
            <div className={styles.playground}>
                <div id="top" className={`${styles.eye} ${styles.top}`}>
                    <Pupil0 />
                </div>
                <div id="bottom" className={`${styles.eye} ${styles.bottom}`}>
                    <Pupil color={'hotRed'} />
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
    return isPupil('top') && isPupil('bottom');
}

function isPupil(id: string): boolean {
    const elem = document.getElementById(id);
    return elem?.firstElementChild !== null
        ? !!elem?.firstElementChild.getAttribute('data-pupil')
        : false;
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
