import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowUpRight, Clock, BookOpen } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { INSIGHTS_DATA } from '@/data/insightsData';

export const InsightsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Architecture', 'Revenue Operations', 'Education Tech', 'Engineering', 'AI & Automation'];

  const filteredArticles = INSIGHTS_DATA.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 sm:pt-32 pb-16">
      {/* Header */}
      <Section variant="white" spacing="sm">
        <Container>
          <div className="max-w-4xl">
            <Badge variant="accent" className="mb-4">
              ENGINEERING &amp; GROWTH INSIGHTS
            </Badge>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-ink tracking-tight leading-[1.05] mb-8">
              Technical blueprints, operational telemetry &amp; architecture notes.
            </h1>
            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed font-sans max-w-3xl">
              Pragmatic articles written by our engineering and revenue architects. Real lessons from building high-scale ERPs, autonomous AI agents, and B2B outbound engines.
            </p>
          </div>
        </Container>
      </Section>

      {/* Search and Category Filter Bar */}
      <div className="border-y border-border bg-surface py-6">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles by title, topic, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-xl bg-white border border-border text-xs sm:text-sm text-ink focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-colors ${
                    selectedCategory === cat
                      ? 'bg-ink text-white font-semibold'
                      : 'bg-white text-ink-secondary hover:text-ink border border-border'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Articles Stream */}
      <Section variant="white" spacing="default">
        <Container>
          {filteredArticles.length === 0 ? (
            <div className="py-16 text-center">
              <BookOpen className="w-10 h-10 text-ink-muted mx-auto mb-3" />
              <h3 className="font-heading font-bold text-xl text-ink">No articles found</h3>
              <p className="text-sm text-ink-secondary mt-1">Try modifying your search query or selected category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-surface rounded-3xl p-8 border border-border hover:border-ink/20 transition-all flex flex-col justify-between shadow-sm group"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-ink-muted mb-4 pb-3 border-b border-border">
                      <span className="text-accent font-semibold uppercase">{article.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <Link to={`/insights/${article.slug}`}>
                      <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink mb-3 group-hover:text-accent transition-colors leading-snug">
                        {article.title}
                      </h2>
                    </Link>

                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {article.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-border text-ink-secondary">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <span className="font-mono text-[11px] text-ink-muted">
                        {article.publishedDate}
                      </span>
                      <Link to={`/insights/${article.slug}`} className="text-xs font-mono text-ink font-semibold flex items-center gap-1 group-hover:text-accent">
                        <span>Read Blueprint</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
};
