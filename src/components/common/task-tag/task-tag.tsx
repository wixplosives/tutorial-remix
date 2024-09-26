import styles from './task-tag.module.scss';
import { TaskSymbol } from '../task-symbol/task-symbol';
import divSymbol from '~/assets/div-symbol.svg';
import chevronSymbol from '~/assets/chevron-symbol.svg';

type TypeName = 'stage' | 'stage-comp' | 'tree' | 'selector';

export interface TaskTagProps {
    type: TypeName;
    chevron?: boolean;
    children: string;
}

export const TaskTag = ({ chevron = false, type, children }: TaskTagProps) => {
    return (
        <span className={styles[type]}>
            {chevron && <img src={chevronSymbol} />}
            {type === 'tree' && <img src={divSymbol} />}
            {children}
        </span>
    );
};
