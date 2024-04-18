import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LoadingSpinner from "@/components/ui/spinner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { PostType } from "@/shared/enum/post-type.enum";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRemark } from "react-remark";

const CreateBlogPostForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState<PostType>();
  const [reactContent, setMarkdownSource] = useRemark();

  const createMutation = trpcClient.posts.create.useMutation({
    onSuccess: () => router.push("/"),
  });

  useEffect(() => {
    setMarkdownSource(content);
  }, [content, setMarkdownSource]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handlePost = () => {
    if (type) {
      const body = { title, content, type };
      createMutation.mutate(body);
    }
  };

  return (
    <div>
      <Tabs defaultValue="write" className="w-full">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="write">Write</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Select
              onValueChange={(value) =>
                setType(
                  value === PostType.ME_NOW ? PostType.ME_NOW : PostType.THOUGHT
                )
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={PostType.ME_NOW}>Me Now</SelectItem>
                <SelectItem value={PostType.THOUGHT}>Thought</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              className={cn("rounded-md", {
                "border border-green-500": createMutation.isSuccess,
                "border border-red-500": createMutation.isError,
              })}
              onClick={handlePost}
              disabled={createMutation.isLoading || type === undefined}
            >
              {createMutation.isLoading ? <LoadingSpinner /> : "Post!"}
            </Button>
          </div>
        </div>
        <TabsContent value="write">
          <Input
            type="text"
            placeholder="Title"
            className="mb-2"
            onChange={({ currentTarget }) => setTitle(currentTarget.value)}
            value={title}
          />
          <textarea
            className="border border-gray-200 h-96 p-5 w-full font-mono"
            placeholder="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
            value={content}
            onChange={handleChange}
          />
        </TabsContent>
        <TabsContent value="preview" className="p-5">
          {reactContent}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CreateBlogPostForm;
