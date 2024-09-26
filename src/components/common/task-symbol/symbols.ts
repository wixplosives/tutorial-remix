import ComponentSymbol from '~/assets/component-symbol.svg';
import InspectSymbol from '~/assets/inspect-symbol.svg';
import EditSymbol from '~/assets/edit-symbol.svg';
import HomeSymbol from '~/assets/home-symbol.svg';
import PropsSymbol from '~/assets/props-symbol.svg';
import ReloadSymbol from '~/assets/reload-symbol.svg';
import StylesSymbol from '~/assets/styles-symbol.svg';
import DivSymbol from '~/assets/div-symbol.svg';
import ChevronSymbol from '~/assets/chevron-symbol.svg';
import PreviewSymbol from '~/assets/preview-symbol.svg';
import HamburgerSymbol from '~/assets/hamburger-symbol.svg';
import MoreSymbol from '~/assets/more-symbol.svg';
import BranchSymbol from '~/assets/branch-symbol.svg';
import CommitSymbol from '~/assets/commit-symbol.svg';
import SyncSymbol from '~/assets/sync-symbol.svg';
import EmptySymbol from '~/assets/empty-symbol.svg';
import AddSymbol from '~/assets/add-symbol.svg';

export const symbols = {
    empty: EmptySymbol,
    add: AddSymbol,
    component: ComponentSymbol,
    inspect: InspectSymbol,
    edit: EditSymbol,
    home: HomeSymbol,
    props: PropsSymbol,
    reload: ReloadSymbol,
    styles: StylesSymbol,
    div: DivSymbol,
    chevron: ChevronSymbol,
    preview: PreviewSymbol,
    hamburger: HamburgerSymbol,
    more: MoreSymbol,
    branch: BranchSymbol,
    commit: CommitSymbol,
    sync: SyncSymbol,
};

export type SymbolName = keyof typeof symbols;
