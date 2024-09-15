import classNames from 'classnames';
import styles from './site-wrapper.module.scss';

export interface SiteWrapperProps {
    className?: string;
    children?: React.ReactNode;
}

export const SiteWrapper = ({ className, children }: SiteWrapperProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>{children}</div>
        </div>
    );
};
