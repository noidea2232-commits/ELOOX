import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { INSIGHTS_DATA } from '@/data/insightsData';

export const InsightDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = INSIGHTS_DATA.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedArticles = INSIGHTS_DATA.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="pt-28 sm:pt-32 pb-16">
      {/* Top Breadcrumb */}
      <div className="border-b border-border bg-white py-3.5">
        <Container>
          <div className="flex items-center gap-2 font-mono text-xs text-ink-muted">
            <Link to="/insights" className="hover:text-ink flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Insights</span>
            </Link>
            <span>/</span>
            <span className="text-accent uppercase font-semibold">{article.category}</span>
          </div>
        </Container>
      </div>

      {/* Article Header */}
      <Section variant="white" spacing="sm">
        <Container size="narrow">
          <div className="mb-6">
            <Badge variant="accent" className="mb-3">
              {article.category}
            </Badge>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-ink tracking-tight leading-[1.08] mb-6">
              {article.title}
            </h1>
            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed font-sans mb-8">
              {article.excerpt}
            </p>

            {/* Author & Read Time Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border font-mono text-xs text-ink-secondary">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center text-ink font-bold font-heading">
                  E
                </div>
                <div>
                  <div className="text-ink font-semibold">{article.author.name}</div>
                  <div className="text-[10px] text-ink-muted">{article.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-ink-muted">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
                <span>//</span>
                <span>{article.publishedDate}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Article Body */}
      <Section variant="white" spacing="none" className="pb-16">
        <Container size="narrow">
          <div className="prose prose-lg max-w-none space-y-6 text-ink leading-relaxed font-sans text-base sm:text-lg">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="text-ink-secondary leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-ink-muted mr-2">Tags:</span>
            {article.tags.map((t, idx) => (
              <span key={idx} className="font-mono text-xs px-3 py-1 rounded-md bg-surface border border-border text-ink-secondary">
                #{t}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related Blueprints */}
      <Section variant="surface" spacing="default" className="border-t border-border">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading font-bold text-2xl text-ink">
                Related Engineering Blueprints
              </h2>
              <Link to="/insights" className="text-xs font-mono text-accent hover:underline flex items-center gap-1">
                View All Articles <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div key={rel.slug} className="p-6 rounded-2xl bg-white border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-accent uppercase font-semibold block mb-2">
                      {rel.category}
                    </span>
                    <Link to={`/insights/${rel.slug}`}>
                      <h3 className="font-heading font-bold text-lg text-ink hover:text-accent transition-colors mb-2">
                        {rel.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                      {rel.excerpt}
                    </p>
                  </div>
                  <Link to={`/insights/${rel.slug}`} className="text-xs font-mono font-semibold text-ink flex items-center gap-1 pt-3 border-t border-border">
                    Read Blueprint <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
