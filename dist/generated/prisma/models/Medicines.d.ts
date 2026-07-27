import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Medicines
 *
 */
export type MedicinesModel = runtime.Types.Result.DefaultSelection<Prisma.$MedicinesPayload>;
export type AggregateMedicines = {
    _count: MedicinesCountAggregateOutputType | null;
    _min: MedicinesMinAggregateOutputType | null;
    _max: MedicinesMaxAggregateOutputType | null;
};
export type MedicinesMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    genericName: string | null;
    strength: string | null;
    description: string | null;
    image: string | null;
    manufacturer: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    categoriesId: string | null;
};
export type MedicinesMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    genericName: string | null;
    strength: string | null;
    description: string | null;
    image: string | null;
    manufacturer: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    categoriesId: string | null;
};
export type MedicinesCountAggregateOutputType = {
    id: number;
    title: number;
    genericName: number;
    strength: number;
    description: number;
    image: number;
    manufacturer: number;
    createdAt: number;
    updatedAt: number;
    categoriesId: number;
    _all: number;
};
export type MedicinesMinAggregateInputType = {
    id?: true;
    title?: true;
    genericName?: true;
    strength?: true;
    description?: true;
    image?: true;
    manufacturer?: true;
    createdAt?: true;
    updatedAt?: true;
    categoriesId?: true;
};
export type MedicinesMaxAggregateInputType = {
    id?: true;
    title?: true;
    genericName?: true;
    strength?: true;
    description?: true;
    image?: true;
    manufacturer?: true;
    createdAt?: true;
    updatedAt?: true;
    categoriesId?: true;
};
export type MedicinesCountAggregateInputType = {
    id?: true;
    title?: true;
    genericName?: true;
    strength?: true;
    description?: true;
    image?: true;
    manufacturer?: true;
    createdAt?: true;
    updatedAt?: true;
    categoriesId?: true;
    _all?: true;
};
export type MedicinesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to aggregate.
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Prisma.MedicinesOrderByWithRelationInput | Prisma.MedicinesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MedicinesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Medicines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Medicines
    **/
    _count?: true | MedicinesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MedicinesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MedicinesMaxAggregateInputType;
};
export type GetMedicinesAggregateType<T extends MedicinesAggregateArgs> = {
    [P in keyof T & keyof AggregateMedicines]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMedicines[P]> : Prisma.GetScalarType<T[P], AggregateMedicines[P]>;
};
export type MedicinesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicinesWhereInput;
    orderBy?: Prisma.MedicinesOrderByWithAggregationInput | Prisma.MedicinesOrderByWithAggregationInput[];
    by: Prisma.MedicinesScalarFieldEnum[] | Prisma.MedicinesScalarFieldEnum;
    having?: Prisma.MedicinesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MedicinesCountAggregateInputType | true;
    _min?: MedicinesMinAggregateInputType;
    _max?: MedicinesMaxAggregateInputType;
};
export type MedicinesGroupByOutputType = {
    id: string;
    title: string;
    genericName: string | null;
    strength: string | null;
    description: string;
    image: string;
    manufacturer: string;
    createdAt: Date;
    updatedAt: Date;
    categoriesId: string;
    _count: MedicinesCountAggregateOutputType | null;
    _min: MedicinesMinAggregateOutputType | null;
    _max: MedicinesMaxAggregateOutputType | null;
};
export type GetMedicinesGroupByPayload<T extends MedicinesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MedicinesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MedicinesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MedicinesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MedicinesGroupByOutputType[P]>;
}>>;
export type MedicinesWhereInput = {
    AND?: Prisma.MedicinesWhereInput | Prisma.MedicinesWhereInput[];
    OR?: Prisma.MedicinesWhereInput[];
    NOT?: Prisma.MedicinesWhereInput | Prisma.MedicinesWhereInput[];
    id?: Prisma.StringFilter<"Medicines"> | string;
    title?: Prisma.StringFilter<"Medicines"> | string;
    genericName?: Prisma.StringNullableFilter<"Medicines"> | string | null;
    strength?: Prisma.StringNullableFilter<"Medicines"> | string | null;
    description?: Prisma.StringFilter<"Medicines"> | string;
    image?: Prisma.StringFilter<"Medicines"> | string;
    manufacturer?: Prisma.StringFilter<"Medicines"> | string;
    createdAt?: Prisma.DateTimeFilter<"Medicines"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Medicines"> | Date | string;
    categoriesId?: Prisma.StringFilter<"Medicines"> | string;
    inventories?: Prisma.SellerInventoryListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
    categories?: Prisma.XOR<Prisma.CategoriesScalarRelationFilter, Prisma.CategoriesWhereInput>;
};
export type MedicinesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    genericName?: Prisma.SortOrderInput | Prisma.SortOrder;
    strength?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    categoriesId?: Prisma.SortOrder;
    inventories?: Prisma.SellerInventoryOrderByRelationAggregateInput;
    reviews?: Prisma.ReviewOrderByRelationAggregateInput;
    categories?: Prisma.CategoriesOrderByWithRelationInput;
};
export type MedicinesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MedicinesWhereInput | Prisma.MedicinesWhereInput[];
    OR?: Prisma.MedicinesWhereInput[];
    NOT?: Prisma.MedicinesWhereInput | Prisma.MedicinesWhereInput[];
    title?: Prisma.StringFilter<"Medicines"> | string;
    genericName?: Prisma.StringNullableFilter<"Medicines"> | string | null;
    strength?: Prisma.StringNullableFilter<"Medicines"> | string | null;
    description?: Prisma.StringFilter<"Medicines"> | string;
    image?: Prisma.StringFilter<"Medicines"> | string;
    manufacturer?: Prisma.StringFilter<"Medicines"> | string;
    createdAt?: Prisma.DateTimeFilter<"Medicines"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Medicines"> | Date | string;
    categoriesId?: Prisma.StringFilter<"Medicines"> | string;
    inventories?: Prisma.SellerInventoryListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
    categories?: Prisma.XOR<Prisma.CategoriesScalarRelationFilter, Prisma.CategoriesWhereInput>;
}, "id">;
export type MedicinesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    genericName?: Prisma.SortOrderInput | Prisma.SortOrder;
    strength?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    categoriesId?: Prisma.SortOrder;
    _count?: Prisma.MedicinesCountOrderByAggregateInput;
    _max?: Prisma.MedicinesMaxOrderByAggregateInput;
    _min?: Prisma.MedicinesMinOrderByAggregateInput;
};
export type MedicinesScalarWhereWithAggregatesInput = {
    AND?: Prisma.MedicinesScalarWhereWithAggregatesInput | Prisma.MedicinesScalarWhereWithAggregatesInput[];
    OR?: Prisma.MedicinesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MedicinesScalarWhereWithAggregatesInput | Prisma.MedicinesScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Medicines"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Medicines"> | string;
    genericName?: Prisma.StringNullableWithAggregatesFilter<"Medicines"> | string | null;
    strength?: Prisma.StringNullableWithAggregatesFilter<"Medicines"> | string | null;
    description?: Prisma.StringWithAggregatesFilter<"Medicines"> | string;
    image?: Prisma.StringWithAggregatesFilter<"Medicines"> | string;
    manufacturer?: Prisma.StringWithAggregatesFilter<"Medicines"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Medicines"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Medicines"> | Date | string;
    categoriesId?: Prisma.StringWithAggregatesFilter<"Medicines"> | string;
};
export type MedicinesCreateInput = {
    id?: string;
    title: string;
    genericName?: string | null;
    strength?: string | null;
    description: string;
    image: string;
    manufacturer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventories?: Prisma.SellerInventoryCreateNestedManyWithoutMedicinesInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutMedicinesInput;
    categories: Prisma.CategoriesCreateNestedOneWithoutMedicinesInput;
};
export type MedicinesUncheckedCreateInput = {
    id?: string;
    title: string;
    genericName?: string | null;
    strength?: string | null;
    description: string;
    image: string;
    manufacturer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoriesId: string;
    inventories?: Prisma.SellerInventoryUncheckedCreateNestedManyWithoutMedicinesInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutMedicinesInput;
};
export type MedicinesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: Prisma.SellerInventoryUpdateManyWithoutMedicinesNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutMedicinesNestedInput;
    categories?: Prisma.CategoriesUpdateOneRequiredWithoutMedicinesNestedInput;
};
export type MedicinesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriesId?: Prisma.StringFieldUpdateOperationsInput | string;
    inventories?: Prisma.SellerInventoryUncheckedUpdateManyWithoutMedicinesNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutMedicinesNestedInput;
};
export type MedicinesCreateManyInput = {
    id?: string;
    title: string;
    genericName?: string | null;
    strength?: string | null;
    description: string;
    image: string;
    manufacturer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoriesId: string;
};
export type MedicinesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicinesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriesId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MedicinesListRelationFilter = {
    every?: Prisma.MedicinesWhereInput;
    some?: Prisma.MedicinesWhereInput;
    none?: Prisma.MedicinesWhereInput;
};
export type MedicinesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MedicinesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    genericName?: Prisma.SortOrder;
    strength?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    categoriesId?: Prisma.SortOrder;
};
export type MedicinesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    genericName?: Prisma.SortOrder;
    strength?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    categoriesId?: Prisma.SortOrder;
};
export type MedicinesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    genericName?: Prisma.SortOrder;
    strength?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    manufacturer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    categoriesId?: Prisma.SortOrder;
};
export type MedicinesScalarRelationFilter = {
    is?: Prisma.MedicinesWhereInput;
    isNot?: Prisma.MedicinesWhereInput;
};
export type MedicinesCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutCategoriesInput, Prisma.MedicinesUncheckedCreateWithoutCategoriesInput> | Prisma.MedicinesCreateWithoutCategoriesInput[] | Prisma.MedicinesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutCategoriesInput | Prisma.MedicinesCreateOrConnectWithoutCategoriesInput[];
    createMany?: Prisma.MedicinesCreateManyCategoriesInputEnvelope;
    connect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
};
export type MedicinesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutCategoriesInput, Prisma.MedicinesUncheckedCreateWithoutCategoriesInput> | Prisma.MedicinesCreateWithoutCategoriesInput[] | Prisma.MedicinesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutCategoriesInput | Prisma.MedicinesCreateOrConnectWithoutCategoriesInput[];
    createMany?: Prisma.MedicinesCreateManyCategoriesInputEnvelope;
    connect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
};
export type MedicinesUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutCategoriesInput, Prisma.MedicinesUncheckedCreateWithoutCategoriesInput> | Prisma.MedicinesCreateWithoutCategoriesInput[] | Prisma.MedicinesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutCategoriesInput | Prisma.MedicinesCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.MedicinesUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.MedicinesUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: Prisma.MedicinesCreateManyCategoriesInputEnvelope;
    set?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    disconnect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    delete?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    connect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    update?: Prisma.MedicinesUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.MedicinesUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.MedicinesUpdateManyWithWhereWithoutCategoriesInput | Prisma.MedicinesUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.MedicinesScalarWhereInput | Prisma.MedicinesScalarWhereInput[];
};
export type MedicinesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutCategoriesInput, Prisma.MedicinesUncheckedCreateWithoutCategoriesInput> | Prisma.MedicinesCreateWithoutCategoriesInput[] | Prisma.MedicinesUncheckedCreateWithoutCategoriesInput[];
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutCategoriesInput | Prisma.MedicinesCreateOrConnectWithoutCategoriesInput[];
    upsert?: Prisma.MedicinesUpsertWithWhereUniqueWithoutCategoriesInput | Prisma.MedicinesUpsertWithWhereUniqueWithoutCategoriesInput[];
    createMany?: Prisma.MedicinesCreateManyCategoriesInputEnvelope;
    set?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    disconnect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    delete?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    connect?: Prisma.MedicinesWhereUniqueInput | Prisma.MedicinesWhereUniqueInput[];
    update?: Prisma.MedicinesUpdateWithWhereUniqueWithoutCategoriesInput | Prisma.MedicinesUpdateWithWhereUniqueWithoutCategoriesInput[];
    updateMany?: Prisma.MedicinesUpdateManyWithWhereWithoutCategoriesInput | Prisma.MedicinesUpdateManyWithWhereWithoutCategoriesInput[];
    deleteMany?: Prisma.MedicinesScalarWhereInput | Prisma.MedicinesScalarWhereInput[];
};
export type MedicinesCreateNestedOneWithoutInventoriesInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutInventoriesInput, Prisma.MedicinesUncheckedCreateWithoutInventoriesInput>;
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutInventoriesInput;
    connect?: Prisma.MedicinesWhereUniqueInput;
};
export type MedicinesUpdateOneRequiredWithoutInventoriesNestedInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutInventoriesInput, Prisma.MedicinesUncheckedCreateWithoutInventoriesInput>;
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutInventoriesInput;
    upsert?: Prisma.MedicinesUpsertWithoutInventoriesInput;
    connect?: Prisma.MedicinesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicinesUpdateToOneWithWhereWithoutInventoriesInput, Prisma.MedicinesUpdateWithoutInventoriesInput>, Prisma.MedicinesUncheckedUpdateWithoutInventoriesInput>;
};
export type MedicinesCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutReviewsInput, Prisma.MedicinesUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.MedicinesWhereUniqueInput;
};
export type MedicinesUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.MedicinesCreateWithoutReviewsInput, Prisma.MedicinesUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.MedicinesCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.MedicinesUpsertWithoutReviewsInput;
    connect?: Prisma.MedicinesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MedicinesUpdateToOneWithWhereWithoutReviewsInput, Prisma.MedicinesUpdateWithoutReviewsInput>, Prisma.MedicinesUncheckedUpdateWithoutReviewsInput>;
};
export type MedicinesCreateWithoutCategoriesInput = {
    id?: string;
    title: string;
    genericName?: string | null;
    strength?: string | null;
    description: string;
    image: string;
    manufacturer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventories?: Prisma.SellerInventoryCreateNestedManyWithoutMedicinesInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutMedicinesInput;
};
export type MedicinesUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    title: string;
    genericName?: string | null;
    strength?: string | null;
    description: string;
    image: string;
    manufacturer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventories?: Prisma.SellerInventoryUncheckedCreateNestedManyWithoutMedicinesInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutMedicinesInput;
};
export type MedicinesCreateOrConnectWithoutCategoriesInput = {
    where: Prisma.MedicinesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutCategoriesInput, Prisma.MedicinesUncheckedCreateWithoutCategoriesInput>;
};
export type MedicinesCreateManyCategoriesInputEnvelope = {
    data: Prisma.MedicinesCreateManyCategoriesInput | Prisma.MedicinesCreateManyCategoriesInput[];
    skipDuplicates?: boolean;
};
export type MedicinesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.MedicinesWhereUniqueInput;
    update: Prisma.XOR<Prisma.MedicinesUpdateWithoutCategoriesInput, Prisma.MedicinesUncheckedUpdateWithoutCategoriesInput>;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutCategoriesInput, Prisma.MedicinesUncheckedCreateWithoutCategoriesInput>;
};
export type MedicinesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: Prisma.MedicinesWhereUniqueInput;
    data: Prisma.XOR<Prisma.MedicinesUpdateWithoutCategoriesInput, Prisma.MedicinesUncheckedUpdateWithoutCategoriesInput>;
};
export type MedicinesUpdateManyWithWhereWithoutCategoriesInput = {
    where: Prisma.MedicinesScalarWhereInput;
    data: Prisma.XOR<Prisma.MedicinesUpdateManyMutationInput, Prisma.MedicinesUncheckedUpdateManyWithoutCategoriesInput>;
};
export type MedicinesScalarWhereInput = {
    AND?: Prisma.MedicinesScalarWhereInput | Prisma.MedicinesScalarWhereInput[];
    OR?: Prisma.MedicinesScalarWhereInput[];
    NOT?: Prisma.MedicinesScalarWhereInput | Prisma.MedicinesScalarWhereInput[];
    id?: Prisma.StringFilter<"Medicines"> | string;
    title?: Prisma.StringFilter<"Medicines"> | string;
    genericName?: Prisma.StringNullableFilter<"Medicines"> | string | null;
    strength?: Prisma.StringNullableFilter<"Medicines"> | string | null;
    description?: Prisma.StringFilter<"Medicines"> | string;
    image?: Prisma.StringFilter<"Medicines"> | string;
    manufacturer?: Prisma.StringFilter<"Medicines"> | string;
    createdAt?: Prisma.DateTimeFilter<"Medicines"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Medicines"> | Date | string;
    categoriesId?: Prisma.StringFilter<"Medicines"> | string;
};
export type MedicinesCreateWithoutInventoriesInput = {
    id?: string;
    title: string;
    genericName?: string | null;
    strength?: string | null;
    description: string;
    image: string;
    manufacturer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: Prisma.ReviewCreateNestedManyWithoutMedicinesInput;
    categories: Prisma.CategoriesCreateNestedOneWithoutMedicinesInput;
};
export type MedicinesUncheckedCreateWithoutInventoriesInput = {
    id?: string;
    title: string;
    genericName?: string | null;
    strength?: string | null;
    description: string;
    image: string;
    manufacturer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoriesId: string;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutMedicinesInput;
};
export type MedicinesCreateOrConnectWithoutInventoriesInput = {
    where: Prisma.MedicinesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutInventoriesInput, Prisma.MedicinesUncheckedCreateWithoutInventoriesInput>;
};
export type MedicinesUpsertWithoutInventoriesInput = {
    update: Prisma.XOR<Prisma.MedicinesUpdateWithoutInventoriesInput, Prisma.MedicinesUncheckedUpdateWithoutInventoriesInput>;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutInventoriesInput, Prisma.MedicinesUncheckedCreateWithoutInventoriesInput>;
    where?: Prisma.MedicinesWhereInput;
};
export type MedicinesUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: Prisma.MedicinesWhereInput;
    data: Prisma.XOR<Prisma.MedicinesUpdateWithoutInventoriesInput, Prisma.MedicinesUncheckedUpdateWithoutInventoriesInput>;
};
export type MedicinesUpdateWithoutInventoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.ReviewUpdateManyWithoutMedicinesNestedInput;
    categories?: Prisma.CategoriesUpdateOneRequiredWithoutMedicinesNestedInput;
};
export type MedicinesUncheckedUpdateWithoutInventoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriesId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutMedicinesNestedInput;
};
export type MedicinesCreateWithoutReviewsInput = {
    id?: string;
    title: string;
    genericName?: string | null;
    strength?: string | null;
    description: string;
    image: string;
    manufacturer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventories?: Prisma.SellerInventoryCreateNestedManyWithoutMedicinesInput;
    categories: Prisma.CategoriesCreateNestedOneWithoutMedicinesInput;
};
export type MedicinesUncheckedCreateWithoutReviewsInput = {
    id?: string;
    title: string;
    genericName?: string | null;
    strength?: string | null;
    description: string;
    image: string;
    manufacturer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    categoriesId: string;
    inventories?: Prisma.SellerInventoryUncheckedCreateNestedManyWithoutMedicinesInput;
};
export type MedicinesCreateOrConnectWithoutReviewsInput = {
    where: Prisma.MedicinesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutReviewsInput, Prisma.MedicinesUncheckedCreateWithoutReviewsInput>;
};
export type MedicinesUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.MedicinesUpdateWithoutReviewsInput, Prisma.MedicinesUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.MedicinesCreateWithoutReviewsInput, Prisma.MedicinesUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.MedicinesWhereInput;
};
export type MedicinesUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.MedicinesWhereInput;
    data: Prisma.XOR<Prisma.MedicinesUpdateWithoutReviewsInput, Prisma.MedicinesUncheckedUpdateWithoutReviewsInput>;
};
export type MedicinesUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: Prisma.SellerInventoryUpdateManyWithoutMedicinesNestedInput;
    categories?: Prisma.CategoriesUpdateOneRequiredWithoutMedicinesNestedInput;
};
export type MedicinesUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoriesId?: Prisma.StringFieldUpdateOperationsInput | string;
    inventories?: Prisma.SellerInventoryUncheckedUpdateManyWithoutMedicinesNestedInput;
};
export type MedicinesCreateManyCategoriesInput = {
    id?: string;
    title: string;
    genericName?: string | null;
    strength?: string | null;
    description: string;
    image: string;
    manufacturer: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MedicinesUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: Prisma.SellerInventoryUpdateManyWithoutMedicinesNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutMedicinesNestedInput;
};
export type MedicinesUncheckedUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventories?: Prisma.SellerInventoryUncheckedUpdateManyWithoutMedicinesNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutMedicinesNestedInput;
};
export type MedicinesUncheckedUpdateManyWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    genericName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    strength?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    manufacturer?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type MedicinesCountOutputType
 */
export type MedicinesCountOutputType = {
    inventories: number;
    reviews: number;
};
export type MedicinesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventories?: boolean | MedicinesCountOutputTypeCountInventoriesArgs;
    reviews?: boolean | MedicinesCountOutputTypeCountReviewsArgs;
};
/**
 * MedicinesCountOutputType without action
 */
export type MedicinesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicinesCountOutputType
     */
    select?: Prisma.MedicinesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MedicinesCountOutputType without action
 */
export type MedicinesCountOutputTypeCountInventoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SellerInventoryWhereInput;
};
/**
 * MedicinesCountOutputType without action
 */
export type MedicinesCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
};
export type MedicinesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    genericName?: boolean;
    strength?: boolean;
    description?: boolean;
    image?: boolean;
    manufacturer?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categoriesId?: boolean;
    inventories?: boolean | Prisma.Medicines$inventoriesArgs<ExtArgs>;
    reviews?: boolean | Prisma.Medicines$reviewsArgs<ExtArgs>;
    categories?: boolean | Prisma.CategoriesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicinesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medicines"]>;
export type MedicinesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    genericName?: boolean;
    strength?: boolean;
    description?: boolean;
    image?: boolean;
    manufacturer?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categoriesId?: boolean;
    categories?: boolean | Prisma.CategoriesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medicines"]>;
export type MedicinesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    genericName?: boolean;
    strength?: boolean;
    description?: boolean;
    image?: boolean;
    manufacturer?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categoriesId?: boolean;
    categories?: boolean | Prisma.CategoriesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["medicines"]>;
export type MedicinesSelectScalar = {
    id?: boolean;
    title?: boolean;
    genericName?: boolean;
    strength?: boolean;
    description?: boolean;
    image?: boolean;
    manufacturer?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    categoriesId?: boolean;
};
export type MedicinesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "genericName" | "strength" | "description" | "image" | "manufacturer" | "createdAt" | "updatedAt" | "categoriesId", ExtArgs["result"]["medicines"]>;
export type MedicinesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventories?: boolean | Prisma.Medicines$inventoriesArgs<ExtArgs>;
    reviews?: boolean | Prisma.Medicines$reviewsArgs<ExtArgs>;
    categories?: boolean | Prisma.CategoriesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.MedicinesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MedicinesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categories?: boolean | Prisma.CategoriesDefaultArgs<ExtArgs>;
};
export type MedicinesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categories?: boolean | Prisma.CategoriesDefaultArgs<ExtArgs>;
};
export type $MedicinesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Medicines";
    objects: {
        inventories: Prisma.$SellerInventoryPayload<ExtArgs>[];
        reviews: Prisma.$ReviewPayload<ExtArgs>[];
        categories: Prisma.$CategoriesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        genericName: string | null;
        strength: string | null;
        description: string;
        image: string;
        manufacturer: string;
        createdAt: Date;
        updatedAt: Date;
        categoriesId: string;
    }, ExtArgs["result"]["medicines"]>;
    composites: {};
};
export type MedicinesGetPayload<S extends boolean | null | undefined | MedicinesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MedicinesPayload, S>;
export type MedicinesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MedicinesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MedicinesCountAggregateInputType | true;
};
export interface MedicinesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Medicines'];
        meta: {
            name: 'Medicines';
        };
    };
    /**
     * Find zero or one Medicines that matches the filter.
     * @param {MedicinesFindUniqueArgs} args - Arguments to find a Medicines
     * @example
     * // Get one Medicines
     * const medicines = await prisma.medicines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicinesFindUniqueArgs>(args: Prisma.SelectSubset<T, MedicinesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Medicines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicinesFindUniqueOrThrowArgs} args - Arguments to find a Medicines
     * @example
     * // Get one Medicines
     * const medicines = await prisma.medicines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicinesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MedicinesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesFindFirstArgs} args - Arguments to find a Medicines
     * @example
     * // Get one Medicines
     * const medicines = await prisma.medicines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicinesFindFirstArgs>(args?: Prisma.SelectSubset<T, MedicinesFindFirstArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Medicines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesFindFirstOrThrowArgs} args - Arguments to find a Medicines
     * @example
     * // Get one Medicines
     * const medicines = await prisma.medicines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicinesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MedicinesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicines.findMany()
     *
     * // Get first 10 Medicines
     * const medicines = await prisma.medicines.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const medicinesWithIdOnly = await prisma.medicines.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MedicinesFindManyArgs>(args?: Prisma.SelectSubset<T, MedicinesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Medicines.
     * @param {MedicinesCreateArgs} args - Arguments to create a Medicines.
     * @example
     * // Create one Medicines
     * const Medicines = await prisma.medicines.create({
     *   data: {
     *     // ... data to create a Medicines
     *   }
     * })
     *
     */
    create<T extends MedicinesCreateArgs>(args: Prisma.SelectSubset<T, MedicinesCreateArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Medicines.
     * @param {MedicinesCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicines = await prisma.medicines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MedicinesCreateManyArgs>(args?: Prisma.SelectSubset<T, MedicinesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {MedicinesCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicines = await prisma.medicines.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Medicines and only return the `id`
     * const medicinesWithIdOnly = await prisma.medicines.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MedicinesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MedicinesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Medicines.
     * @param {MedicinesDeleteArgs} args - Arguments to delete one Medicines.
     * @example
     * // Delete one Medicines
     * const Medicines = await prisma.medicines.delete({
     *   where: {
     *     // ... filter to delete one Medicines
     *   }
     * })
     *
     */
    delete<T extends MedicinesDeleteArgs>(args: Prisma.SelectSubset<T, MedicinesDeleteArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Medicines.
     * @param {MedicinesUpdateArgs} args - Arguments to update one Medicines.
     * @example
     * // Update one Medicines
     * const medicines = await prisma.medicines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MedicinesUpdateArgs>(args: Prisma.SelectSubset<T, MedicinesUpdateArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Medicines.
     * @param {MedicinesDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MedicinesDeleteManyArgs>(args?: Prisma.SelectSubset<T, MedicinesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicines = await prisma.medicines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MedicinesUpdateManyArgs>(args: Prisma.SelectSubset<T, MedicinesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Medicines and returns the data updated in the database.
     * @param {MedicinesUpdateManyAndReturnArgs} args - Arguments to update many Medicines.
     * @example
     * // Update many Medicines
     * const medicines = await prisma.medicines.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Medicines and only return the `id`
     * const medicinesWithIdOnly = await prisma.medicines.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MedicinesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MedicinesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Medicines.
     * @param {MedicinesUpsertArgs} args - Arguments to update or create a Medicines.
     * @example
     * // Update or create a Medicines
     * const medicines = await prisma.medicines.upsert({
     *   create: {
     *     // ... data to create a Medicines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicines we want to update
     *   }
     * })
     */
    upsert<T extends MedicinesUpsertArgs>(args: Prisma.SelectSubset<T, MedicinesUpsertArgs<ExtArgs>>): Prisma.Prisma__MedicinesClient<runtime.Types.Result.GetResult<Prisma.$MedicinesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicines.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicinesCountArgs>(args?: Prisma.Subset<T, MedicinesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MedicinesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicinesAggregateArgs>(args: Prisma.Subset<T, MedicinesAggregateArgs>): Prisma.PrismaPromise<GetMedicinesAggregateType<T>>;
    /**
     * Group by Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicinesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends MedicinesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MedicinesGroupByArgs['orderBy'];
    } : {
        orderBy?: MedicinesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MedicinesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicinesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Medicines model
     */
    readonly fields: MedicinesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Medicines.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MedicinesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventories<T extends Prisma.Medicines$inventoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Medicines$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SellerInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.Medicines$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Medicines$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    categories<T extends Prisma.CategoriesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriesDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoriesClient<runtime.Types.Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Medicines model
 */
export interface MedicinesFieldRefs {
    readonly id: Prisma.FieldRef<"Medicines", 'String'>;
    readonly title: Prisma.FieldRef<"Medicines", 'String'>;
    readonly genericName: Prisma.FieldRef<"Medicines", 'String'>;
    readonly strength: Prisma.FieldRef<"Medicines", 'String'>;
    readonly description: Prisma.FieldRef<"Medicines", 'String'>;
    readonly image: Prisma.FieldRef<"Medicines", 'String'>;
    readonly manufacturer: Prisma.FieldRef<"Medicines", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Medicines", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Medicines", 'DateTime'>;
    readonly categoriesId: Prisma.FieldRef<"Medicines", 'String'>;
}
/**
 * Medicines findUnique
 */
export type MedicinesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * Filter, which Medicines to fetch.
     */
    where: Prisma.MedicinesWhereUniqueInput;
};
/**
 * Medicines findUniqueOrThrow
 */
export type MedicinesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * Filter, which Medicines to fetch.
     */
    where: Prisma.MedicinesWhereUniqueInput;
};
/**
 * Medicines findFirst
 */
export type MedicinesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * Filter, which Medicines to fetch.
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Prisma.MedicinesOrderByWithRelationInput | Prisma.MedicinesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Medicines.
     */
    cursor?: Prisma.MedicinesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Medicines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Medicines.
     */
    distinct?: Prisma.MedicinesScalarFieldEnum | Prisma.MedicinesScalarFieldEnum[];
};
/**
 * Medicines findFirstOrThrow
 */
export type MedicinesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * Filter, which Medicines to fetch.
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Prisma.MedicinesOrderByWithRelationInput | Prisma.MedicinesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Medicines.
     */
    cursor?: Prisma.MedicinesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Medicines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Medicines.
     */
    distinct?: Prisma.MedicinesScalarFieldEnum | Prisma.MedicinesScalarFieldEnum[];
};
/**
 * Medicines findMany
 */
export type MedicinesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * Filter, which Medicines to fetch.
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Medicines to fetch.
     */
    orderBy?: Prisma.MedicinesOrderByWithRelationInput | Prisma.MedicinesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Medicines.
     */
    cursor?: Prisma.MedicinesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Medicines.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Medicines.
     */
    distinct?: Prisma.MedicinesScalarFieldEnum | Prisma.MedicinesScalarFieldEnum[];
};
/**
 * Medicines create
 */
export type MedicinesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * The data needed to create a Medicines.
     */
    data: Prisma.XOR<Prisma.MedicinesCreateInput, Prisma.MedicinesUncheckedCreateInput>;
};
/**
 * Medicines createMany
 */
export type MedicinesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: Prisma.MedicinesCreateManyInput | Prisma.MedicinesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Medicines createManyAndReturn
 */
export type MedicinesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * The data used to create many Medicines.
     */
    data: Prisma.MedicinesCreateManyInput | Prisma.MedicinesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Medicines update
 */
export type MedicinesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * The data needed to update a Medicines.
     */
    data: Prisma.XOR<Prisma.MedicinesUpdateInput, Prisma.MedicinesUncheckedUpdateInput>;
    /**
     * Choose, which Medicines to update.
     */
    where: Prisma.MedicinesWhereUniqueInput;
};
/**
 * Medicines updateMany
 */
export type MedicinesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: Prisma.XOR<Prisma.MedicinesUpdateManyMutationInput, Prisma.MedicinesUncheckedUpdateManyInput>;
    /**
     * Filter which Medicines to update
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * Limit how many Medicines to update.
     */
    limit?: number;
};
/**
 * Medicines updateManyAndReturn
 */
export type MedicinesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * The data used to update Medicines.
     */
    data: Prisma.XOR<Prisma.MedicinesUpdateManyMutationInput, Prisma.MedicinesUncheckedUpdateManyInput>;
    /**
     * Filter which Medicines to update
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * Limit how many Medicines to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Medicines upsert
 */
export type MedicinesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * The filter to search for the Medicines to update in case it exists.
     */
    where: Prisma.MedicinesWhereUniqueInput;
    /**
     * In case the Medicines found by the `where` argument doesn't exist, create a new Medicines with this data.
     */
    create: Prisma.XOR<Prisma.MedicinesCreateInput, Prisma.MedicinesUncheckedCreateInput>;
    /**
     * In case the Medicines was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MedicinesUpdateInput, Prisma.MedicinesUncheckedUpdateInput>;
};
/**
 * Medicines delete
 */
export type MedicinesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
    /**
     * Filter which Medicines to delete.
     */
    where: Prisma.MedicinesWhereUniqueInput;
};
/**
 * Medicines deleteMany
 */
export type MedicinesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: Prisma.MedicinesWhereInput;
    /**
     * Limit how many Medicines to delete.
     */
    limit?: number;
};
/**
 * Medicines.inventories
 */
export type Medicines$inventoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerInventory
     */
    select?: Prisma.SellerInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SellerInventory
     */
    omit?: Prisma.SellerInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SellerInventoryInclude<ExtArgs> | null;
    where?: Prisma.SellerInventoryWhereInput;
    orderBy?: Prisma.SellerInventoryOrderByWithRelationInput | Prisma.SellerInventoryOrderByWithRelationInput[];
    cursor?: Prisma.SellerInventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SellerInventoryScalarFieldEnum | Prisma.SellerInventoryScalarFieldEnum[];
};
/**
 * Medicines.reviews
 */
export type Medicines$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Review
     */
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
/**
 * Medicines without action
 */
export type MedicinesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicines
     */
    select?: Prisma.MedicinesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Medicines
     */
    omit?: Prisma.MedicinesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MedicinesInclude<ExtArgs> | null;
};
//# sourceMappingURL=Medicines.d.ts.map