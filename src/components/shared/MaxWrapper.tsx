import React, { FC } from "react";

import { cn } from "@/lib/utils";

type MaxWrapperTypes = {
    children: React.ReactNode;
    className?: string;
};

const MaxWrapper: FC<MaxWrapperTypes> = ({ children, className }) => {
    return (
        <section className={cn("w-full mx-auto max-w-[1368px]", className)}>
            {children}
        </section>
    );
};

export default MaxWrapper;
