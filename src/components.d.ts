import type { DefineComponent, VNode } from "vue";

declare module "vue" {
  export interface GlobalComponents {
    VDataTable: DefineComponent<
      {
        test?: boolean;
      },
      {
        $scopedSlots: Readonly<{
          /** Slot to add a custom footer */
          footer: (args: {
            props: {
              options: {
                page: number;
                itemsPerPage: number;
                sortBy: string[];
                sortDesc: boolean[];
                groupBy: string[];
                groupDesc: boolean[];
                multiSort: boolean;
                mustSort: boolean;
              };
              pagination: {
                page: number;
                itemsPerPage: number;
                pageStart: number;
                pageStop: number;
                pageCount: number;
                itemsLength: number;
              };
              itemsPerPageText: string;
            };
          }) => VNode[];
          /** Slot to customize a specific column */
          [name: `item.${string}`]: (args: {
            isMobile: boolean;
            item: any;
            value: any;
            index: number;
          }) => VNode[];
        }>;
      }
    >;
  }
}
