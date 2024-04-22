import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/ui/spinner";
import { Archive, Edit, Trash } from "lucide-react";
import { ThoughtColumn } from "./columns";

interface CellActionProps {
  data: ThoughtColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  return (
    <>
      <Button
        variant="ghost"
        className="h-8 w-8 p-0"
        onClick={() => router.push(`/admin/posts/edit/${data.id}`)}
      >
        <Edit className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        className="h-8 w-8 p-0"
        onClick={() => archiveMutation.mutate(data.id)}
        disabled={archiveMutation.isLoading}
      >
        <Archive className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        className="h-8 w-8 p-0"
        onClick={() => deleteMutation.mutate(data.id)}
        disabled={deleteMutation.isLoading}
      >
        {deleteMutation.isLoading ? (
          <LoadingSpinner />
        ) : (
          <Trash className="h-4 w-4" />
        )}
      </Button>
    </>
  );
};
