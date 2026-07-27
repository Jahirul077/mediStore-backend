export type IPaginationOptions = {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
};
export type IOptionsResult = {
    page: number;
    limit: number;
    skip: number;
    sortBy: string;
    sortOrder: "asc" | "desc";
};
export declare const paginationHelper: {
    calculatePagination: (option: IPaginationOptions) => IOptionsResult;
};
//# sourceMappingURL=paginationHelper.d.ts.map