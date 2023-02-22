import {FilterStatus} from './FilterStatus.enum';
import {Sort} from '../sort/Sort';

export interface IPostsParams {
    currentPage?: number;
    filterStatus?: FilterStatus;
    limit?: number;
    search?: string;
    sort: Sort;
}