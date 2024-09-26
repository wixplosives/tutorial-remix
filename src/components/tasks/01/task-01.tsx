import styles from './task-01.module.scss';
import previewSymbol from '~/assets/preview-symbol.svg';
import reloadSymbol from '~/assets/reload-symbol.svg';
import homeSymbol from '~/assets/home-symbol.svg';

export const Task01 = () => {
    return (
        <div className={styles.task}>
            <div className={styles.progress}>
                <b>01</b> / 10
            </div>
            <div className={styles.title}>Let's Start!</div>
            <ol start={0} className={styles.desc}>
                <li>
                    In this tutorial, you&apos;ll learn how to view and visually edit <b>React</b>{' '}
                    components using
                    <b>&nbsp;Codux</b>.
                </li>
                <li>
                    Switch to <img src={previewSymbol} /> <b>Preview Mode</b>
                    &nbsp;and hover over the shapes to erase them. Can you see what’s behind?
                </li>
                <li>
                    To reload and bring back the shapes, just click&nbsp;
                    <img src={reloadSymbol} /> <b>Reload Preview</b>.
                </li>
                <li>
                    When ready, go back to the <img src={homeSymbol} />
                    <b>Home</b> screen to find your next lessons.
                </li>
            </ol>
        </div>
    );
};
