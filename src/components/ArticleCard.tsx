import { Link } from "react-router-dom";
import { Article } from "@/data/articles";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

const ArticleCard = ({ article, index = 0 }: ArticleCardProps) => {
  return (
    <article 
      className="group bg-card rounded-xl overflow-hidden shadow-soft hover-lift animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link to={`/article/${article.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="font-body text-xs font-medium backdrop-blur-sm bg-background/90">
              {article.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h3 className="font-display text-lg md:text-xl font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>

          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          {/* Author & Meta */}
          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="font-body text-sm font-medium text-foreground truncate">
                {article.author.name}
              </p>
              <p className="font-body text-xs text-muted-foreground">
                {article.date} · {article.readTime}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
