import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Article } from "@/data/articles";
import { Badge } from "@/components/ui/badge";

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-card shadow-card group">
      <Link to={`/article/${article.id}`} className="block">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent md:hidden" />
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="font-body text-xs font-medium">
                Featured
              </Badge>
              <Badge variant="outline" className="font-body text-xs font-medium">
                {article.category}
              </Badge>
            </div>

            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4 group-hover:text-primary transition-colors">
              {article.title}
            </h2>

            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-6 line-clamp-3">
              {article.excerpt}
            </p>

            {/* Author & Meta */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-background"
                />
                <div>
                  <p className="font-body text-sm font-medium text-foreground">
                    {article.author.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {article.date} · {article.readTime}
                  </p>
                </div>
              </div>

              <span className="flex items-center gap-2 text-primary font-body text-sm font-medium group-hover:gap-3 transition-all">
                Read article
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default FeaturedArticle;
