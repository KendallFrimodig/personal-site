import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Blog/Cell';
import data from '../data/blog';

const Blog = () => (
  <Main
    title="Blog"
    description="Learn about Kendall Frimodigs's experiences."
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
          <h4 data-testid="heading"><Link to="/blog">click on each title for more</Link></h4>
        </div>
      </header>
      {data.map((blog) => (
        <Cell
          data={blog}
          key={blog.title}
        />
      ))}
    </article>
  </Main>
);

export default Blog;
