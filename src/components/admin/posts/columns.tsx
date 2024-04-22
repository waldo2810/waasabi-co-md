import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type ThoughtColumn = {
  link: string | null;
  id: number;
  title: string;
  content: string | null;
  type: string;
  createdAt: string;
  updatedAt: string;
};

export const columns: ColumnDef<ThoughtColumn>[] = [
  { accessorKey: "title", header: "Title" },
  { accessorKey: "type", header: "Type" },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => {
      const date = new Date(row.original.createdAt);
      return (
        <p>
          {date.toLocaleString("es-CO", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Edited",
    cell: ({ row }) => {
      const date = new Date(row.original.updatedAt);
      return (
        <p>
          {date.toLocaleString("es-CO", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
