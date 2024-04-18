const PostContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[600px]">
      <p className="leading-7">{children}</p>
    </div>
  );
};

export default PostContent;
