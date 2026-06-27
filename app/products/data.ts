import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Images
import productImagePlaceholder from "@/public/images/about/hospitals.jpg";

export type productItem = {
    id: string,
    name: string;
    description: string;
    image: string | StaticImport;
};

export const ProductData: productItem[] = [
    {
        id: "1",
        name: "item",
        description: "description description description description description descriptionvdescription description description description description description descriptiondescription description",
        image: productImagePlaceholder,
    },
     {
        id: "2",
        name: "item",
        description: "description description description description description descriptionvdescription description description description description description descriptiondescription description",
        image: productImagePlaceholder,
    },
     {
        id: "3",
        name: "item",
        description: "description description description description description descriptionvdescription description description description description description descriptiondescription description",
        image: productImagePlaceholder,
    },
     {
        id: "4",
        name: "item",
        description: "description description description description description descriptionvdescription description description description description description descriptiondescription description",
        image: productImagePlaceholder,
    },
];