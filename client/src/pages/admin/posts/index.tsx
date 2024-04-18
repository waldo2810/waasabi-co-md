import { columns } from "@/components/admin/posts/columns";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Thoughts = () => {
  const router = useRouter();
  const query = trpcClient.posts.getAll.useQuery();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data: query.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });
  const searchKey = "title";

  return (
    <div>
      <div className="flex items-center py-4 justify-between gap-2">
        <Input
          placeholder="Search"
          className="max-w-sm"
          value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(searchKey)?.setFilterValue(event.target.value)
          }
        />
        <Button
          variant="outline"
          aria-label="Create new post"
          title="Create new post"
          disabled={query.isLoading}
          onClick={() => router.push(`/admin/posts/new`)}
        >
          Create
        </Button>
      </div>
      <DataTable columns={columns} table={table} />
    </div>
  );
};

export default Thoughts;
