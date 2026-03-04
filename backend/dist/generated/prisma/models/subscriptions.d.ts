import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type subscriptionsModel = runtime.Types.Result.DefaultSelection<Prisma.$subscriptionsPayload>;
export type AggregateSubscriptions = {
    _count: SubscriptionsCountAggregateOutputType | null;
    _avg: SubscriptionsAvgAggregateOutputType | null;
    _sum: SubscriptionsSumAggregateOutputType | null;
    _min: SubscriptionsMinAggregateOutputType | null;
    _max: SubscriptionsMaxAggregateOutputType | null;
};
export type SubscriptionsAvgAggregateOutputType = {
    id: number | null;
};
export type SubscriptionsSumAggregateOutputType = {
    id: number | null;
};
export type SubscriptionsMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
};
export type SubscriptionsMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
};
export type SubscriptionsCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    _all: number;
};
export type SubscriptionsAvgAggregateInputType = {
    id?: true;
};
export type SubscriptionsSumAggregateInputType = {
    id?: true;
};
export type SubscriptionsMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
};
export type SubscriptionsMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
};
export type SubscriptionsCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    _all?: true;
};
export type SubscriptionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithRelationInput | Prisma.subscriptionsOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubscriptionsCountAggregateInputType;
    _avg?: SubscriptionsAvgAggregateInputType;
    _sum?: SubscriptionsSumAggregateInputType;
    _min?: SubscriptionsMinAggregateInputType;
    _max?: SubscriptionsMaxAggregateInputType;
};
export type GetSubscriptionsAggregateType<T extends SubscriptionsAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscriptions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubscriptions[P]> : Prisma.GetScalarType<T[P], AggregateSubscriptions[P]>;
};
export type subscriptionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithAggregationInput | Prisma.subscriptionsOrderByWithAggregationInput[];
    by: Prisma.SubscriptionsScalarFieldEnum[] | Prisma.SubscriptionsScalarFieldEnum;
    having?: Prisma.subscriptionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionsCountAggregateInputType | true;
    _avg?: SubscriptionsAvgAggregateInputType;
    _sum?: SubscriptionsSumAggregateInputType;
    _min?: SubscriptionsMinAggregateInputType;
    _max?: SubscriptionsMaxAggregateInputType;
};
export type SubscriptionsGroupByOutputType = {
    id: number;
    email: string;
    name: string;
    _count: SubscriptionsCountAggregateOutputType | null;
    _avg: SubscriptionsAvgAggregateOutputType | null;
    _sum: SubscriptionsSumAggregateOutputType | null;
    _min: SubscriptionsMinAggregateOutputType | null;
    _max: SubscriptionsMaxAggregateOutputType | null;
};
type GetSubscriptionsGroupByPayload<T extends subscriptionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubscriptionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubscriptionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubscriptionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>;
}>>;
export type subscriptionsWhereInput = {
    AND?: Prisma.subscriptionsWhereInput | Prisma.subscriptionsWhereInput[];
    OR?: Prisma.subscriptionsWhereInput[];
    NOT?: Prisma.subscriptionsWhereInput | Prisma.subscriptionsWhereInput[];
    id?: Prisma.IntFilter<"subscriptions"> | number;
    email?: Prisma.StringFilter<"subscriptions"> | string;
    name?: Prisma.StringFilter<"subscriptions"> | string;
};
export type subscriptionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type subscriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.subscriptionsWhereInput | Prisma.subscriptionsWhereInput[];
    OR?: Prisma.subscriptionsWhereInput[];
    NOT?: Prisma.subscriptionsWhereInput | Prisma.subscriptionsWhereInput[];
    name?: Prisma.StringFilter<"subscriptions"> | string;
}, "id" | "email">;
export type subscriptionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.subscriptionsCountOrderByAggregateInput;
    _avg?: Prisma.subscriptionsAvgOrderByAggregateInput;
    _max?: Prisma.subscriptionsMaxOrderByAggregateInput;
    _min?: Prisma.subscriptionsMinOrderByAggregateInput;
    _sum?: Prisma.subscriptionsSumOrderByAggregateInput;
};
export type subscriptionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.subscriptionsScalarWhereWithAggregatesInput | Prisma.subscriptionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.subscriptionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.subscriptionsScalarWhereWithAggregatesInput | Prisma.subscriptionsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"subscriptions"> | number;
    email?: Prisma.StringWithAggregatesFilter<"subscriptions"> | string;
    name?: Prisma.StringWithAggregatesFilter<"subscriptions"> | string;
};
export type subscriptionsCreateInput = {
    email: string;
    name: string;
};
export type subscriptionsUncheckedCreateInput = {
    id?: number;
    email: string;
    name: string;
};
export type subscriptionsUpdateInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type subscriptionsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type subscriptionsCreateManyInput = {
    id?: number;
    email: string;
    name: string;
};
export type subscriptionsUpdateManyMutationInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type subscriptionsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type subscriptionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type subscriptionsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type subscriptionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type subscriptionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type subscriptionsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type subscriptionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
}, ExtArgs["result"]["subscriptions"]>;
export type subscriptionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
}, ExtArgs["result"]["subscriptions"]>;
export type subscriptionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
}, ExtArgs["result"]["subscriptions"]>;
export type subscriptionsSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
};
export type subscriptionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "name", ExtArgs["result"]["subscriptions"]>;
export type $subscriptionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "subscriptions";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        email: string;
        name: string;
    }, ExtArgs["result"]["subscriptions"]>;
    composites: {};
};
export type subscriptionsGetPayload<S extends boolean | null | undefined | subscriptionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload, S>;
export type subscriptionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<subscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubscriptionsCountAggregateInputType | true;
};
export interface subscriptionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['subscriptions'];
        meta: {
            name: 'subscriptions';
        };
    };
    findUnique<T extends subscriptionsFindUniqueArgs>(args: Prisma.SelectSubset<T, subscriptionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends subscriptionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, subscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends subscriptionsFindFirstArgs>(args?: Prisma.SelectSubset<T, subscriptionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends subscriptionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, subscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends subscriptionsFindManyArgs>(args?: Prisma.SelectSubset<T, subscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends subscriptionsCreateArgs>(args: Prisma.SelectSubset<T, subscriptionsCreateArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends subscriptionsCreateManyArgs>(args?: Prisma.SelectSubset<T, subscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends subscriptionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, subscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends subscriptionsDeleteArgs>(args: Prisma.SelectSubset<T, subscriptionsDeleteArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends subscriptionsUpdateArgs>(args: Prisma.SelectSubset<T, subscriptionsUpdateArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends subscriptionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, subscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends subscriptionsUpdateManyArgs>(args: Prisma.SelectSubset<T, subscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends subscriptionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, subscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends subscriptionsUpsertArgs>(args: Prisma.SelectSubset<T, subscriptionsUpsertArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends subscriptionsCountArgs>(args?: Prisma.Subset<T, subscriptionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubscriptionsCountAggregateOutputType> : number>;
    aggregate<T extends SubscriptionsAggregateArgs>(args: Prisma.Subset<T, SubscriptionsAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionsAggregateType<T>>;
    groupBy<T extends subscriptionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: subscriptionsGroupByArgs['orderBy'];
    } : {
        orderBy?: subscriptionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, subscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: subscriptionsFieldRefs;
}
export interface Prisma__subscriptionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface subscriptionsFieldRefs {
    readonly id: Prisma.FieldRef<"subscriptions", 'Int'>;
    readonly email: Prisma.FieldRef<"subscriptions", 'String'>;
    readonly name: Prisma.FieldRef<"subscriptions", 'String'>;
}
export type subscriptionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    where: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    where: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithRelationInput | Prisma.subscriptionsOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionsScalarFieldEnum | Prisma.SubscriptionsScalarFieldEnum[];
};
export type subscriptionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithRelationInput | Prisma.subscriptionsOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionsScalarFieldEnum | Prisma.SubscriptionsScalarFieldEnum[];
};
export type subscriptionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithRelationInput | Prisma.subscriptionsOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionsScalarFieldEnum | Prisma.SubscriptionsScalarFieldEnum[];
};
export type subscriptionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscriptionsCreateInput, Prisma.subscriptionsUncheckedCreateInput>;
};
export type subscriptionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.subscriptionsCreateManyInput | Prisma.subscriptionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type subscriptionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    data: Prisma.subscriptionsCreateManyInput | Prisma.subscriptionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type subscriptionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscriptionsUpdateInput, Prisma.subscriptionsUncheckedUpdateInput>;
    where: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.subscriptionsUpdateManyMutationInput, Prisma.subscriptionsUncheckedUpdateManyInput>;
    where?: Prisma.subscriptionsWhereInput;
    limit?: number;
};
export type subscriptionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscriptionsUpdateManyMutationInput, Prisma.subscriptionsUncheckedUpdateManyInput>;
    where?: Prisma.subscriptionsWhereInput;
    limit?: number;
};
export type subscriptionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    where: Prisma.subscriptionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscriptionsCreateInput, Prisma.subscriptionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.subscriptionsUpdateInput, Prisma.subscriptionsUncheckedUpdateInput>;
};
export type subscriptionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    where: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscriptionsWhereInput;
    limit?: number;
};
export type subscriptionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
};
export {};
