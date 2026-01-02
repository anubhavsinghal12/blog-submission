import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleCard from "@/components/ArticleCard";
import CategoryFilter from "@/components/CategoryFilter";
import Newsletter from "@/components/Newsletter";
import { articles } from "@/data/articles";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const featuredArticle = articles.find((a) => a.featured);
  const filteredArticles = articles.filter((article) => {
    if (selectedCategory === "All") return !article.featured;
    return article.category === selectedCategory && !article.featured;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 animate-fade-up">
              Stories that <span className="text-primary italic">inspire</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
              Thoughtful articles on technology, design, business, and life.
            </p>
          </div>

          {/* Featured Article */}
          {featuredArticle && selectedCategory === "All" && (
            <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <FeaturedArticle article={featuredArticle} />
            </div>
          )}
        </section>

        {/* Articles Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {selectedCategory === "All" ? "Latest Articles" : selectedCategory}
            </h2>
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onCategoryChange={handleCategoryChange} 
            />
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-body text-lg text-muted-foreground">
                No articles found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          )}

          {/* Newsletter */}
          <Newsletter />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
