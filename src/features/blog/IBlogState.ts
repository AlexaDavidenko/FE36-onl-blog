import {IPost} from '../post/IPost';
import {Status} from '../util/Status.enum';
import {FilterStatus} from './FilterStatus.enum';
import {Sort} from '../sort/Sort';

export interface IBlogState {
    currentPage: number;
    pageCount: number;
    posts: IPost[];
    status: Status;
    filterStatus: FilterStatus;
    search: string;
    sort: Sort;
}