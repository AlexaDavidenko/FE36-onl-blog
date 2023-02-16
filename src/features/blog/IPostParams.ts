import {FilterStatus} from './FilterStatus.enum';

export interface IPostsParams {
    currentPage: number;
    filterStatus: FilterStatus;
    limit?: number;
    search?: string;
}