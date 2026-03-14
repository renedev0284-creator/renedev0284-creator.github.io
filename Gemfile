source "https://rubygems.org"

# Jekyll
gem "jekyll", "= 4.3.3"
gem "csv"
gem "base64"

# Plugins de Jekyll
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Plataforma Windows y JRuby
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Optional file watcher for older Windows Ruby builds.
# Ruby 3.4 on Windows fails compiling `wdm`, and it's not required for `jekyll build`.
