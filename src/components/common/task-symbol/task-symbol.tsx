import styles from './task-symbol.module.scss';
import { symbols, SymbolName } from './symbols';
import classNames from 'classnames';

export interface TaskSymbolProps {
    name?: SymbolName;
}

export const TaskSymbol = ({ name = 'empty' }: TaskSymbolProps) => {
    const Symbol = symbols[name];
    return (
        <span>
            <Symbol className={styles[name]} />
        </span>
    );
};
