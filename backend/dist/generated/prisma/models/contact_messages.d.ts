import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type contact_messagesModel = runtime.Types.Result.DefaultSelection<Prisma.$contact_messagesPayload>;
export type AggregateContact_messages = {
    _count: Contact_messagesCountAggregateOutputType | null;
    _avg: Contact_messagesAvgAggregateOutputType | null;
    _sum: Contact_messagesSumAggregateOutputType | null;
    _min: Contact_messagesMinAggregateOutputType | null;
    _max: Contact_messagesMaxAggregateOutputType | null;
};
export type Contact_messagesAvgAggregateOutputType = {
    id: number | null;
};
export type Contact_messagesSumAggregateOutputType = {
    id: number | null;
};
export type Contact_messagesMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    subject: string | null;
    message: string | null;
};
export type Contact_messagesMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    subject: string | null;
    message: string | null;
};
export type Contact_messagesCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    phone: number;
    subject: number;
    message: number;
    _all: number;
};
export type Contact_messagesAvgAggregateInputType = {
    id?: true;
};
export type Contact_messagesSumAggregateInputType = {
    id?: true;
};
export type Contact_messagesMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    subject?: true;
    message?: true;
};
export type Contact_messagesMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    subject?: true;
    message?: true;
};
export type Contact_messagesCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    subject?: true;
    message?: true;
    _all?: true;
};
export type Contact_messagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contact_messagesWhereInput;
    orderBy?: Prisma.contact_messagesOrderByWithRelationInput | Prisma.contact_messagesOrderByWithRelationInput[];
    cursor?: Prisma.contact_messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Contact_messagesCountAggregateInputType;
    _avg?: Contact_messagesAvgAggregateInputType;
    _sum?: Contact_messagesSumAggregateInputType;
    _min?: Contact_messagesMinAggregateInputType;
    _max?: Contact_messagesMaxAggregateInputType;
};
export type GetContact_messagesAggregateType<T extends Contact_messagesAggregateArgs> = {
    [P in keyof T & keyof AggregateContact_messages]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContact_messages[P]> : Prisma.GetScalarType<T[P], AggregateContact_messages[P]>;
};
export type contact_messagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contact_messagesWhereInput;
    orderBy?: Prisma.contact_messagesOrderByWithAggregationInput | Prisma.contact_messagesOrderByWithAggregationInput[];
    by: Prisma.Contact_messagesScalarFieldEnum[] | Prisma.Contact_messagesScalarFieldEnum;
    having?: Prisma.contact_messagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Contact_messagesCountAggregateInputType | true;
    _avg?: Contact_messagesAvgAggregateInputType;
    _sum?: Contact_messagesSumAggregateInputType;
    _min?: Contact_messagesMinAggregateInputType;
    _max?: Contact_messagesMaxAggregateInputType;
};
export type Contact_messagesGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    subject: string;
    message: string;
    _count: Contact_messagesCountAggregateOutputType | null;
    _avg: Contact_messagesAvgAggregateOutputType | null;
    _sum: Contact_messagesSumAggregateOutputType | null;
    _min: Contact_messagesMinAggregateOutputType | null;
    _max: Contact_messagesMaxAggregateOutputType | null;
};
type GetContact_messagesGroupByPayload<T extends contact_messagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Contact_messagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Contact_messagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Contact_messagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Contact_messagesGroupByOutputType[P]>;
}>>;
export type contact_messagesWhereInput = {
    AND?: Prisma.contact_messagesWhereInput | Prisma.contact_messagesWhereInput[];
    OR?: Prisma.contact_messagesWhereInput[];
    NOT?: Prisma.contact_messagesWhereInput | Prisma.contact_messagesWhereInput[];
    id?: Prisma.IntFilter<"contact_messages"> | number;
    name?: Prisma.StringFilter<"contact_messages"> | string;
    email?: Prisma.StringFilter<"contact_messages"> | string;
    phone?: Prisma.StringNullableFilter<"contact_messages"> | string | null;
    subject?: Prisma.StringFilter<"contact_messages"> | string;
    message?: Prisma.StringFilter<"contact_messages"> | string;
};
export type contact_messagesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
};
export type contact_messagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.contact_messagesWhereInput | Prisma.contact_messagesWhereInput[];
    OR?: Prisma.contact_messagesWhereInput[];
    NOT?: Prisma.contact_messagesWhereInput | Prisma.contact_messagesWhereInput[];
    name?: Prisma.StringFilter<"contact_messages"> | string;
    email?: Prisma.StringFilter<"contact_messages"> | string;
    phone?: Prisma.StringNullableFilter<"contact_messages"> | string | null;
    subject?: Prisma.StringFilter<"contact_messages"> | string;
    message?: Prisma.StringFilter<"contact_messages"> | string;
}, "id">;
export type contact_messagesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    _count?: Prisma.contact_messagesCountOrderByAggregateInput;
    _avg?: Prisma.contact_messagesAvgOrderByAggregateInput;
    _max?: Prisma.contact_messagesMaxOrderByAggregateInput;
    _min?: Prisma.contact_messagesMinOrderByAggregateInput;
    _sum?: Prisma.contact_messagesSumOrderByAggregateInput;
};
export type contact_messagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.contact_messagesScalarWhereWithAggregatesInput | Prisma.contact_messagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.contact_messagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.contact_messagesScalarWhereWithAggregatesInput | Prisma.contact_messagesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"contact_messages"> | number;
    name?: Prisma.StringWithAggregatesFilter<"contact_messages"> | string;
    email?: Prisma.StringWithAggregatesFilter<"contact_messages"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"contact_messages"> | string | null;
    subject?: Prisma.StringWithAggregatesFilter<"contact_messages"> | string;
    message?: Prisma.StringWithAggregatesFilter<"contact_messages"> | string;
};
export type contact_messagesCreateInput = {
    name: string;
    email: string;
    phone?: string | null;
    subject: string;
    message: string;
};
export type contact_messagesUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    phone?: string | null;
    subject: string;
    message: string;
};
export type contact_messagesUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type contact_messagesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type contact_messagesCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    phone?: string | null;
    subject: string;
    message: string;
};
export type contact_messagesUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type contact_messagesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type contact_messagesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
};
export type contact_messagesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type contact_messagesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
};
export type contact_messagesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
};
export type contact_messagesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type contact_messagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    subject?: boolean;
    message?: boolean;
}, ExtArgs["result"]["contact_messages"]>;
export type contact_messagesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    subject?: boolean;
    message?: boolean;
}, ExtArgs["result"]["contact_messages"]>;
export type contact_messagesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    subject?: boolean;
    message?: boolean;
}, ExtArgs["result"]["contact_messages"]>;
export type contact_messagesSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    subject?: boolean;
    message?: boolean;
};
export type contact_messagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "phone" | "subject" | "message", ExtArgs["result"]["contact_messages"]>;
export type $contact_messagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "contact_messages";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        email: string;
        phone: string | null;
        subject: string;
        message: string;
    }, ExtArgs["result"]["contact_messages"]>;
    composites: {};
};
export type contact_messagesGetPayload<S extends boolean | null | undefined | contact_messagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$contact_messagesPayload, S>;
export type contact_messagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<contact_messagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Contact_messagesCountAggregateInputType | true;
};
export interface contact_messagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['contact_messages'];
        meta: {
            name: 'contact_messages';
        };
    };
    findUnique<T extends contact_messagesFindUniqueArgs>(args: Prisma.SelectSubset<T, contact_messagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__contact_messagesClient<runtime.Types.Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends contact_messagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, contact_messagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__contact_messagesClient<runtime.Types.Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends contact_messagesFindFirstArgs>(args?: Prisma.SelectSubset<T, contact_messagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__contact_messagesClient<runtime.Types.Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends contact_messagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, contact_messagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__contact_messagesClient<runtime.Types.Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends contact_messagesFindManyArgs>(args?: Prisma.SelectSubset<T, contact_messagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends contact_messagesCreateArgs>(args: Prisma.SelectSubset<T, contact_messagesCreateArgs<ExtArgs>>): Prisma.Prisma__contact_messagesClient<runtime.Types.Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends contact_messagesCreateManyArgs>(args?: Prisma.SelectSubset<T, contact_messagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends contact_messagesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, contact_messagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends contact_messagesDeleteArgs>(args: Prisma.SelectSubset<T, contact_messagesDeleteArgs<ExtArgs>>): Prisma.Prisma__contact_messagesClient<runtime.Types.Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends contact_messagesUpdateArgs>(args: Prisma.SelectSubset<T, contact_messagesUpdateArgs<ExtArgs>>): Prisma.Prisma__contact_messagesClient<runtime.Types.Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends contact_messagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, contact_messagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends contact_messagesUpdateManyArgs>(args: Prisma.SelectSubset<T, contact_messagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends contact_messagesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, contact_messagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends contact_messagesUpsertArgs>(args: Prisma.SelectSubset<T, contact_messagesUpsertArgs<ExtArgs>>): Prisma.Prisma__contact_messagesClient<runtime.Types.Result.GetResult<Prisma.$contact_messagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends contact_messagesCountArgs>(args?: Prisma.Subset<T, contact_messagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Contact_messagesCountAggregateOutputType> : number>;
    aggregate<T extends Contact_messagesAggregateArgs>(args: Prisma.Subset<T, Contact_messagesAggregateArgs>): Prisma.PrismaPromise<GetContact_messagesAggregateType<T>>;
    groupBy<T extends contact_messagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: contact_messagesGroupByArgs['orderBy'];
    } : {
        orderBy?: contact_messagesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, contact_messagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContact_messagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: contact_messagesFieldRefs;
}
export interface Prisma__contact_messagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface contact_messagesFieldRefs {
    readonly id: Prisma.FieldRef<"contact_messages", 'Int'>;
    readonly name: Prisma.FieldRef<"contact_messages", 'String'>;
    readonly email: Prisma.FieldRef<"contact_messages", 'String'>;
    readonly phone: Prisma.FieldRef<"contact_messages", 'String'>;
    readonly subject: Prisma.FieldRef<"contact_messages", 'String'>;
    readonly message: Prisma.FieldRef<"contact_messages", 'String'>;
}
export type contact_messagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contact_messagesSelect<ExtArgs> | null;
    omit?: Prisma.contact_messagesOmit<ExtArgs> | null;
    where: Prisma.contact_messagesWhereUniqueInput;
};
export type contact_messagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contact_messagesSelect<ExtArgs> | null;
    omit?: Prisma.contact_messagesOmit<ExtArgs> | null;
    where: Prisma.contact_messagesWhereUniqueInput;
};
export type contact_messagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contact_messagesSelect<ExtArgs> | null;
    omit?: Prisma.contact_messagesOmit<ExtArgs> | null;
    where?: Prisma.contact_messagesWhereInput;
    orderBy?: Prisma.contact_messagesOrderByWithRelationInput | Prisma.contact_messagesOrderByWithRelationInput[];
    cursor?: Prisma.contact_messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Contact_messagesScalarFieldEnum | Prisma.Contact_messagesScalarFieldEnum[];
};
export type contact_messagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contact_messagesSelect<ExtArgs> | null;
    omit?: Prisma.contact_messagesOmit<ExtArgs> | null;
    where?: Prisma.contact_messagesWhereInput;
    orderBy?: Prisma.contact_messagesOrderByWithRelationInput | Prisma.contact_messagesOrderByWithRelationInput[];
    cursor?: Prisma.contact_messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Contact_messagesScalarFieldEnum | Prisma.Contact_messagesScalarFieldEnum[];
};
export type contact_messagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contact_messagesSelect<ExtArgs> | null;
    omit?: Prisma.contact_messagesOmit<ExtArgs> | null;
    where?: Prisma.contact_messagesWhereInput;
    orderBy?: Prisma.contact_messagesOrderByWithRelationInput | Prisma.contact_messagesOrderByWithRelationInput[];
    cursor?: Prisma.contact_messagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Contact_messagesScalarFieldEnum | Prisma.Contact_messagesScalarFieldEnum[];
};
export type contact_messagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contact_messagesSelect<ExtArgs> | null;
    omit?: Prisma.contact_messagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contact_messagesCreateInput, Prisma.contact_messagesUncheckedCreateInput>;
};
export type contact_messagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.contact_messagesCreateManyInput | Prisma.contact_messagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type contact_messagesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contact_messagesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.contact_messagesOmit<ExtArgs> | null;
    data: Prisma.contact_messagesCreateManyInput | Prisma.contact_messagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type contact_messagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contact_messagesSelect<ExtArgs> | null;
    omit?: Prisma.contact_messagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contact_messagesUpdateInput, Prisma.contact_messagesUncheckedUpdateInput>;
    where: Prisma.contact_messagesWhereUniqueInput;
};
export type contact_messagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.contact_messagesUpdateManyMutationInput, Prisma.contact_messagesUncheckedUpdateManyInput>;
    where?: Prisma.contact_messagesWhereInput;
    limit?: number;
};
export type contact_messagesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contact_messagesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.contact_messagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contact_messagesUpdateManyMutationInput, Prisma.contact_messagesUncheckedUpdateManyInput>;
    where?: Prisma.contact_messagesWhereInput;
    limit?: number;
};
export type contact_messagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contact_messagesSelect<ExtArgs> | null;
    omit?: Prisma.contact_messagesOmit<ExtArgs> | null;
    where: Prisma.contact_messagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.contact_messagesCreateInput, Prisma.contact_messagesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.contact_messagesUpdateInput, Prisma.contact_messagesUncheckedUpdateInput>;
};
export type contact_messagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contact_messagesSelect<ExtArgs> | null;
    omit?: Prisma.contact_messagesOmit<ExtArgs> | null;
    where: Prisma.contact_messagesWhereUniqueInput;
};
export type contact_messagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contact_messagesWhereInput;
    limit?: number;
};
export type contact_messagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contact_messagesSelect<ExtArgs> | null;
    omit?: Prisma.contact_messagesOmit<ExtArgs> | null;
};
export {};
