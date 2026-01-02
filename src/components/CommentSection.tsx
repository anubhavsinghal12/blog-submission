import { useState } from "react";
import { Comment } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

interface CommentSectionProps {
  articleId: string;
  comments: Comment[];
  onAddComment: (comment: Comment) => void;
}

const CommentSection = ({ articleId, comments, onAddComment }: CommentSectionProps) => {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, profile } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast.error("Please write a comment");
      return;
    }

    if (!user || !profile) {
      toast.error("Please sign in to comment");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      const newComment: Comment = {
        id: `c${Date.now()}`,
        articleId,
        author: profile.display_name || "Anonymous",
        content: content.trim(),
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        avatar: profile.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.display_name || user.email}`,
      };

      onAddComment(newComment);
      setContent("");
      setIsSubmitting(false);
      toast.success("Comment posted successfully!");
    }, 500);
  };

  const articleComments = comments.filter((c) => c.articleId === articleId);

  return (
    <section className="mt-12 pt-12 border-t border-border">
      <div className="flex items-center gap-3 mb-8">
        <MessageCircle className="w-6 h-6 text-primary" />
        <h3 className="font-display text-2xl font-bold text-foreground">
          Comments ({articleComments.length})
        </h3>
      </div>

      {/* Comment Form */}
      {user ? (
        <form onSubmit={handleSubmit} className="mb-10 bg-card rounded-xl p-6 shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            {profile?.avatar_url ? (
              <img 
                src={profile.avatar_url} 
                alt={profile.display_name || "You"} 
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                {(profile?.display_name || user.email || "U")[0].toUpperCase()}
              </div>
            )}
            <span className="font-body font-medium text-foreground">
              {profile?.display_name || "Anonymous"}
            </span>
          </div>
          <div className="space-y-4">
            <Textarea
              placeholder="Share your thoughts..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="font-body min-h-[120px] resize-none"
              maxLength={500}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? "Posting..." : "Post Comment"}
            </Button>
          </div>
        </form>
      ) : (
        <div className="mb-10 bg-card rounded-xl p-6 shadow-soft text-center">
          <p className="font-body text-muted-foreground mb-4">
            Sign in to join the conversation
          </p>
          <Link to="/auth">
            <Button>Sign In to Comment</Button>
          </Link>
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-6">
        {articleComments.length === 0 ? (
          <p className="text-center text-muted-foreground font-body py-8">
            No comments yet. Be the first to share your thoughts!
          </p>
        ) : (
          articleComments.map((comment, index) => (
            <div 
              key={comment.id} 
              className="flex gap-4 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 bg-card rounded-xl p-5 shadow-soft">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-body font-semibold text-foreground">
                    {comment.author}
                  </span>
                  <span className="font-body text-xs text-muted-foreground">
                    {comment.date}
                  </span>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {comment.content}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CommentSection;
