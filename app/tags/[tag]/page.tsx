import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from "@/lib/utils";
import { slug } from "github-slugger";
import { Metadata } from "next";

interface TagPageProps {
  params: {
    tag: string;
    page?: string;
  };
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title: `Topic ${tag} | Thieverse`,
    description: `Posts on the topic of ${tag}`,
  };
}

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const title = tag.split("-").join(" ");

  const displayPosts = getPostsByTagSlug(posts, tag);

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <>
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 mt-10">
        <div className="flex-1 text-center space-y-4">
          <h1 className="inline-block font-black text-4xl text-center lg:text-5xl">
            <span>#</span>
            {title}
          </h1>
          <p className="text-xl text-muted-foreground px-2 mb-2">
            Discover more topic and expand your knowledge!
          </p>
          <hr />
        </div>
      </div>
      <div className="container justify-center gap-6 px-4 md:gap-8 lg:gap-10 xl:px-10 xl:py-10 2xl:px-24 2xl:py-5 mb-6">
        <Card className="col-span-12 row-start-3 mt-10 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((t) => <Tag tag={t} key={t} count={tags[t]} current={slug(t) === tag} />)}
          </CardContent>
        </Card>
      </div>
      <div className="container max-w-6xl grid grid-cols-1 justify-center gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10 xl:px-10 xl:py-10 2xl:px-24 2xl:py-5 mt-8">
        {displayPosts?.length > 0 ? (
          displayPosts
            .filter((post) => post.published)
            .map((post) => {
              const { slug, date, title, description, tags, img } = post;
              return (
                <PostItem
                  key={slug}
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                  tags={tags}
                  img={img}
                />
              );
            })
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </div>
    </>
  );
}
